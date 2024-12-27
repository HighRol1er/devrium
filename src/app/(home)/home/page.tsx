'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PostCard from './components/PostCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts } from './_api/fetchPost';
import { useRef, useEffect } from 'react';
import { IPost } from '@/store/post/postStore';
import usePostStore from '@/store/post/postStore';

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
  // console.log(data);

  const setPosts = usePostStore((state) => state.setPosts);

  // 이부분 솔직히 필요 없을꺼같음 // why? 저장해서 뭐할건데 db에 저장이 되어 있는데.
  useEffect(() => {
    if (data?.pages) {
      const allPosts = data.pages.flatMap((page) => page.posts);
      setPosts(allPosts);
    }
  }, [data, setPosts]);

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
                  <PostCard postId={post.id} />
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
