import { getAllPosts, GetPostsResponse } from '@/services/home/getAllPosts';
import { POSTS } from '@/services/home/queries/useGetAllPost';
import { QueryClient } from '@tanstack/react-query';

/** SSR에서 Infinite Query를 prefetch하기 위한 함수 */
export const prefetchGetAllPosts = async (categoryId?: number) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [POSTS, categoryId],
    queryFn: ({ pageParam = 1 }) => getAllPosts(categoryId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      const { currentPage, totalCount } = lastPage;
      return currentPage < totalCount ? currentPage + 1 : undefined;
    },
  });

  return queryClient;
};
