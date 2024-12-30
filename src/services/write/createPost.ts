import { BASE_URL } from '@/shared/constant/baseUrl';

export interface CreatePostDto {
  title: string;
  content: string;
  categoryId: number;
}

export const createPost = async ({
  title,
  content,
  categoryId,
}: CreatePostDto) => {
  const response = await fetch(`${BASE_URL}/api/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content, categoryId }),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
};
