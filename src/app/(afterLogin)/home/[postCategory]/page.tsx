import { getCategoryByName } from '@/utils/postCategoryUtil';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import PostCategoryPage from '@/components/postCategory/PostCategoryPage';
import { prefetchPostsByCategory } from '@/services/postCategory/queries/usePrefetchPostsByCategory';

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

  const queryClient = await prefetchPostsByCategory(currentCategory.id);

  // const cachedData = queryClient.getQueryData([POSTS, currentCategory.id]);
  // console.log('SSR Fetched Data:', cachedData);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostCategoryPage postCategory={currentCategory.name} />
    </HydrationBoundary>
  );
}
