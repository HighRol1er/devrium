'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PostCard from './components/PostCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts } from './_api/fetchPost';
import { useRef } from 'react';
import { Post } from '@prisma/client';

export default function HomePage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const { currentPage, totalCount } = lastPage;
        return currentPage < totalCount ? currentPage + 1 : undefined;
      },
    });
  const observer = useRef<IntersectionObserver | null>(null);

  const lastPostRef = (node: HTMLElement | null) => {
    if (isFetchingNextPage) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (node) observer.current.observe(node);
  };
  if (isLoading) return <p>Loading posts...</p>;

  return (
    <>
      <div className="grid">
        <Button className="w-40 justify-self-end">
          <Link href="/home/createpost">Create Post</Link>
        </Button>

        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="post-page">
            {page.posts.map((post: Post, postIndex: number) => {
              const isLastPost =
                pageIndex === data.pages.length - 1 &&
                postIndex === page.posts.length - 1;

              return (
                <div
                  key={post.id}
                  ref={isLastPost ? lastPostRef : null} // 마지막 포스트에 ref 연결
                  className="post-item"
                >
                  <PostCard post={post} />
                </div>
              );
            })}
          </div>
        ))}

        {isFetchingNextPage && <p>Loading more posts...</p>}
      </div>
    </>
  );
}
