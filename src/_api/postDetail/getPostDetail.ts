import { BASE_URL } from '@/shared/constant/baseUrl';
import { IPost } from '@/types/post';

export const getPostDetail = async (postId: string): Promise<IPost> => {
  const response = await fetch(`${BASE_URL}/api/post/${postId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch postDetail');
  }

  return response.json();
};
