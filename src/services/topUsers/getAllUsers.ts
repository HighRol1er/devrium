import { BASE_URL } from '@/shared/constant/baseUrl';

export const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/user`);

  if (!response.ok) {
    console.error('Failed to load user data');
  }
  return response.json();
};
