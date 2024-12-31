import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllPosts } from '../getAllPosts';

export const useGetAllPost = () => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalCount } = lastPage;
      return currentPage < totalCount ? currentPage + 1 : undefined;
    },
  });
};
