import { IPost } from '@/types/post';
import { BASE_URL } from '@/shared/constant/baseUrl';

interface FetchPostsResponse {
  posts: IPost[];
  totalCount: number;
  currentPage: number;
}

export const getAllPosts = async ({
  pageParam = 1,
}): Promise<FetchPostsResponse> => {
  const response = await fetch(
    `${BASE_URL}/api/post?page=${pageParam}&pageSize=3` //&categoryId=1
  );

  if (!response.ok) {
    throw new Error('Failed to get posts');
  }

  return response.json();
};
