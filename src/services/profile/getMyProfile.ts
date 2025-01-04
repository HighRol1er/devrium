import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';

export async function getProfile(userId: string) {
  const response = await fetch(
    `${BASE_URL}/api/profile?userId=${userId}`,
    requestOptions('GET')
  );

  if (!response.ok) {
    throw new Error('Failed to get profile');
  }

  return response.json();
}
