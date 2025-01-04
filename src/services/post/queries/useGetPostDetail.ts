import { IPost } from '@/types/post';
import { useQuery } from '@tanstack/react-query';
import { getPostDetail } from '../postService';

export const useGetPostDetail = (postId: string) => {
  return useQuery<IPost>({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
  });
};
