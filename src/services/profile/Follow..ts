import { BASE_URL } from '@/shared/constant/baseUrl';

/* userId : 팔로우할 유저 */
export const followUser = async ({ userId }: { userId: string }) => {
  const response = await fetch(`${BASE_URL}/api/follow/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
};

export const unFollowUser = async ({ userId }: { userId: string }) => {
  const response = await fetch(`${BASE_URL}/api/follow/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
};
