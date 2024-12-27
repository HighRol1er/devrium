import { IUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_URL;

// 기존에 get API를 만들어 놓고
//
export async function fetchMyProfile(userId: string) {
  const response = await fetch(`${API_URL}/api/profile/${userId}`, {
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

// 훅으로 만든거에요
export const useFetchMyProfile = (userId: string) => {
  return useQuery<IUser>({
    queryKey: ['profile', userId],
    queryFn: () => fetchMyProfile(userId),
  });
};
