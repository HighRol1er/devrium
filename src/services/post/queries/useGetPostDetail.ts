import { IPost } from '@/types/post';
import { useQuery } from '@tanstack/react-query';
import { getPostDetail } from '../postService';
import { commonQueryOptions } from '@/utils/tanstack-query/commonQueryOptions';

export const useGetPostDetail = (postId: string) => {
  return useQuery<IPost>({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
    ...commonQueryOptions,
  });
};
