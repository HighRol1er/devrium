import { BASE_URL } from '@/shared/constant/baseUrl';

export const deletePost = async (postId: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/post/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to delete post');
  }
};
