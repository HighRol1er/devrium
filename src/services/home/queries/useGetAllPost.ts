import { commonQueryOptions } from '@/utils/tanstack-query/commonQueryOptions';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllPosts } from '../getAllPosts';

export const useGetAllPost = (categoryId?: number) => {
  return useInfiniteQuery({
    queryKey: ['posts', categoryId], //categoryId가 동적으로 들어오면 -> route.ts(app/api/post/route.ts) 참고!
    queryFn: ({ pageParam = 1 }) => getAllPosts(categoryId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalCount } = lastPage;
      return currentPage < totalCount ? currentPage + 1 : undefined;
    },
    ...commonQueryOptions,
  });
};
