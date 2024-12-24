import { useQuery } from '@tanstack/react-query';

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

export function useFetchUser(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchMyProfile(userId),
    enabled: !!userId,
  });
}
