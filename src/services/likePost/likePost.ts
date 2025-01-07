import { BASE_URL } from '@/shared/constant/baseUrl';
import { HttpMethod, requestOptions } from '../fetch/requestOption';

export const likePost = async (userId: string, postId: string) => {
  const url = `${BASE_URL}/api/like`;

  const response = await fetch(
    url,
    requestOptions(HttpMethod.POST, { userId, postId })
  );

  if (!response.ok) {
    throw new Error('Failed to like post');
  }
};
