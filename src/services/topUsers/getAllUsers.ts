import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';

export const getAllUsers = async () => {
  const url = `${BASE_URL}/api/user`;

  const response = await fetch(url, requestOptions());

  if (!response.ok) {
    console.error('Failed to load user data');
  }
  return response.json();
};
