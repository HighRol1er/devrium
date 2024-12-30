'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader } from 'lucide-react';
import { IPost } from '@/types/post';
import { Button } from '@/components/ui/button';
import PostCard from '@/components/home/PostCard';

import { getAllPosts } from '@/services/home/getAllPosts';

export default function HomePage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: getAllPosts,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const { currentPage, totalCount } = lastPage;
        return currentPage < totalCount ? currentPage + 1 : undefined;
      },
    });
  console.log(data);

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
  //NOTE: loading.tsx 만들어서 로딩 만들기
  if (isLoading) return <p>Loading posts...</p>;

  return (
    <>
      <div className="grid">
        <Button className="w-40 justify-self-end">
          <Link href="/home/write">Create Post</Link>
        </Button>

        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="post-page">
            {page.posts.map((post: IPost, postIndex: number) => {
              // 현재가 마지막 페이지인지 체크
              const isLastPost =
                pageIndex === data.pages.length - 1 &&
                postIndex === page.posts.length - 1;

              return (
                <div
                  key={post.id}
                  ref={isLastPost ? lastPostRef : null}
                  className="post-item"
                >
                  <PostCard post={post} />
                </div>
              );
            })}
          </div>
        ))}

        {isFetchingNextPage && <Loader className="animate-spin" />}
      </div>
    </>
  );
}
