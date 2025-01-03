import { IPost } from '@/types/post';
import { BASE_URL } from '@/shared/constant/baseUrl';

interface FetchPostsResponse {
  posts: IPost[];
  totalCount: number;
  currentPage: number;
}

export const getAllPosts = async (
  categoryId?: number,
  pageParam = 1
): Promise<FetchPostsResponse> => {
  const response = await fetch(
    `${BASE_URL}/api/post?categoryId=${categoryId}&page=${pageParam}&pageSize=3`
  );

  if (!response.ok) {
    throw new Error('Failed to get posts');
  }

  return response.json();
};
