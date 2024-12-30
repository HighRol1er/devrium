import { BASE_URL } from '@/shared/constant/baseUrl';

export const likePost = async (userId: string, postId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, postId }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Error:', error.error);
      return;
    }

    const result = await response.json();
    console.log('Post liked:', result);
  } catch (error) {
    console.error('Error liking post:', error);
  }
};
