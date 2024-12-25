import { IUser } from '@/types/user';
import { queryOptions, useQuery } from '@tanstack/react-query';

export async function fetchMyProfile(userId: string) {
  const response = await fetch(`http://localhost:3000/api/profile/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
}

export const useFetchMyProfile = (userId: string) => {
  return useQuery<IUser>({
    queryKey: ['profile', userId],
    queryFn: () => fetchMyProfile(userId),
  });
};
