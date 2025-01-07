import { BASE_URL } from '@/shared/constant/baseUrl';
import { HttpMethod, requestOptions } from '../fetch/requestOption';

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
  const url = `${BASE_URL}/api/post`;

  const response = await fetch(
    url,
    requestOptions(HttpMethod.POST, { title, content, categoryId })
  );

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
};
