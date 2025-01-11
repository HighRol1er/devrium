import { BASE_URL } from '@/shared/constant/baseUrl';
import { HttpMethod, requestOptions } from '../fetch/requestOption';

export interface CreatePostDto {
  title: string;
  content: string;
  categoryId: number;
  image?: string;
}

export const createPost = async ({
  title,
  content,
  categoryId,
  image,
}: CreatePostDto) => {
  const url = `${BASE_URL}/api/post`;

  const response = await fetch(
    url,
    requestOptions(HttpMethod.POST, { title, content, categoryId, image })
  );

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
};
