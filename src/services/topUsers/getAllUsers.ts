import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';

export const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/user`, requestOptions('GET'));

  if (!response.ok) {
    console.error('Failed to load user data');
  }
  return response.json();
};
