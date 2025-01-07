import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';
import { IUser } from '@/types/user';

export async function getProfile(userId: string): Promise<IUser> {
  const url = `${BASE_URL}/api/profile?userId=${userId}`;

  const response = await fetch(url, requestOptions());

  if (!response.ok) {
    throw new Error('Failed to get profile');
  }

  return response.json();
}
