'use client';

import PostCard from '@/components/home/PostCard';
import { Button } from '@/components/ui/button';
import { useObserver } from '@/hooks/useObserver';
import { useGetAllPost } from '@/services/home/queries/useGetAllPost';
import { IPost } from '@/types/post';
import { Loader } from 'lucide-react';
import Link from 'next/link';

export default function CoderiumPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetAllPost(1);

  const { lastElementRef } = useObserver({
    isFetchingNextPage: isFetchingNextPage,
    hasNextPage: hasNextPage || false,
    fetchNextPage,
  });
  console.log(data);

  //NOTE: loading.tsx 만들어서 로딩 만들기
  // FIX:뭔가 이상함 게시글을 다 못불러온다.
  if (isLoading) return <p>Loading posts...</p>;

  return (
    <>
      <div className="grid">
        <Button className="w-40 justify-self-end">
          <Link href="/home/write">Create Post</Link>
        </Button>

        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="post-page">
            {page.posts
              .filter((post: IPost) => post.categoryId === 1)
              .map((post: IPost, postIndex: number) => {
                // 현재가 마지막 페이지인지 체크
                const isLastPost =
                  pageIndex === data.pages.length - 1 &&
                  postIndex === page.posts.length - 1;

                return (
                  <div
                    key={post.id}
                    ref={isLastPost ? lastElementRef : null}
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
