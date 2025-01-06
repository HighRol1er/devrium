'use client';

import PostCard from '@/components/home/PostCard';
import HomeSkeletonUi from '@/components/home/skeleton/HomeSkeletonUi';
import { Button } from '@/components/ui/button';
import { useObserver } from '@/hooks/useObserver';
import { useGetAllPost } from '@/services/home/queries/useGetAllPost';
import { POST_CATEGORY } from '@/shared/constant/postCategory';
import { getCategoryByName } from '@/utils/postCategoryUtil';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface PostCategoryPageProps {
  postCategory: string;
}

export default function PostCategoryPage(
  //   {
  //   params,
  // }: {
  //   params: Promise<{ postCategory: string }>;
  // }
  { postCategory }: PostCategoryPageProps
) {
  // const { postCategory } = React.use(params);

  const currentCategory = getCategoryByName(postCategory);

  if (!currentCategory) {
    return <div></div>;
  }
  // // 잘못된 카테고리 처리
  if (
    !Object.values(POST_CATEGORY).some(
      (category) => category.name === currentCategory.name
    )
  ) {
    return <div>Invalid category</div>;
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetAllPost(currentCategory.id);

  const { lastElementRef } = useObserver({
    isFetchingNextPage: isFetchingNextPage,
    hasNextPage: hasNextPage || false,
    fetchNextPage,
  });

  if (isLoading) return <HomeSkeletonUi />;

  return (
    <>
      <div className="grid">
        <Button className="w-40 justify-self-end">
          <Link href="/home/write">Create Post</Link>
        </Button>

        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="post-page">
            {page.posts.map((post, postIndex) => {
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

        {isFetchingNextPage && <Loader2 className="animate-spin" />}
      </div>
    </>
  );
}
