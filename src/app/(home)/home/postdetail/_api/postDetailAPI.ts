import { IPost } from '@/store/post/postStore';
import { useQuery } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_URL;

export const fetchPostDetail = async (postId: string) => {
  const response = await fetch(`${API_URL}/api/post/${postId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch postDetail');
  }

  return response.json();
};

export const useFetchPostDetail = (postId: string) => {
  return useQuery<IPost>({
    queryKey: ['postDetail', postId],
    queryFn: () => fetchPostDetail(postId),
  });
};
