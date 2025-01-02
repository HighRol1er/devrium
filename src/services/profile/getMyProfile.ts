import { BASE_URL } from '@/shared/constant/baseUrl';

export async function getMyProfile(userId: string) {
  const response = await fetch(`${BASE_URL}/api/profile?userId=${userId}`, {
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
