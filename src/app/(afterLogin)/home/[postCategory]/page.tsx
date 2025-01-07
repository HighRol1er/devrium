import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { prefetchGetAllPosts } from './usePrefetch';
import { getCategoryByName } from '@/utils/postCategoryUtil';
import PostCategoryPage from './PostCategoryPage';
import { redirect } from 'next/navigation';
import { POSTS } from '@/services/home/queries/useGetAllPost';

export default async function Page({
  params,
}: {
  params: Promise<{ postCategory: string }>;
}) {
  const postCategory = (await params).postCategory;
  const currentCategory = getCategoryByName(postCategory);

  if (!currentCategory) {
    redirect('/home');
  }

  const queryClient = await prefetchGetAllPosts(currentCategory.id);

  // const cachedData = queryClient.getQueryData([POSTS, currentCategory.id]);
  // console.log('SSR Fetched Data:', cachedData);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostCategoryPage postCategory={currentCategory.name} />
    </HydrationBoundary>
  );
}
