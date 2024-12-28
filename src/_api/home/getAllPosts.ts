import { IPost } from '@/types/post';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { BASE_URL } from '@/shared/constant/baseUrl';

// NOTE:이거 util interface로 분리하기
interface FetchPostsResponse {
  posts: IPost[];
  totalCount: number;
  currentPage: number;
}

export const getAllPosts = async ({
  pageParam = 1,
}): Promise<FetchPostsResponse> => {
  const response = await fetch(
    `${BASE_URL}/api/post?page=${pageParam}&pageSize=3`
  );

  if (!response.ok) {
    throw new Error('Failed to get posts');
  }

  return response.json();
};
