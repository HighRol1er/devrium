import { IPost } from '@/types/post';
import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';

export interface GetPostsResponse {
  posts: IPost[];
  totalCount: number;
  currentPage: number;
}

export const getAllPosts = async (
  categoryId?: number,
  pageParam = 1
): Promise<GetPostsResponse> => {
  let url = `${BASE_URL}/api/post?&page=${pageParam}&pageSize=3`;

  if (categoryId !== undefined) {
    url += `&categoryId=${categoryId}`;
  }

  const response = await fetch(url, requestOptions());

  if (!response.ok) {
    throw new Error('Failed to get posts');
  }
  return response.json();
};
