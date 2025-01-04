import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';

export const likePost = async (userId: string, postId: string) => {
  const response = await fetch(
    `${BASE_URL}/api/like`,
    requestOptions('POST', { userId, postId })
  );

  if (!response.ok) {
    throw new Error('Failed to like post');
  }
};
