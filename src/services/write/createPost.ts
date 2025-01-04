import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';

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
  const response = await fetch(
    `${BASE_URL}/api/post`,
    requestOptions('POST', { title, content, categoryId })
  );

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
};
