import { IPost } from '@/types/post';
import { useQuery } from '@tanstack/react-query';
import { getPostDetail } from '../getPostDetail';

export const useGetPostDetail = (postId: string) => {
  return useQuery<IPost>({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
  });
};
