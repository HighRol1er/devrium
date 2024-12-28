import { BASE_URL } from '@/shared/constant/baseUrl';

export const patchTagName = async (userId: string, tagName: string) => {
  const response = await fetch(`${BASE_URL}/api/user/set-tag/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tagName: tagName }),
  });
  if (!response.ok) {
    console.error('Failed to set tag name');
  }

  return response.json();
};
