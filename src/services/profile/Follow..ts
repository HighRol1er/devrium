import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';

/* userId : 팔로우할 유저 */
export const followUser = async ({ userId }: { userId: string }) => {
  const response = await fetch(
    `${BASE_URL}/api/follow/${userId}`,
    requestOptions('POST')
  );

  if (!response.ok) {
    throw new Error('Failed to follow');
  }
};

export const unFollowUser = async ({ userId }: { userId: string }) => {
  const response = await fetch(
    `${BASE_URL}/api/follow/${userId}`,
    requestOptions('DELETE')
  );

  if (!response.ok) {
    throw new Error('Failed to unfollow');
  }
};
