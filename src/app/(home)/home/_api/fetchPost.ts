import { IPost } from '@/store/post/postStore';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_URL;

interface FetchPostsResponse {
  posts: IPost[];
  totalCount: number;
  currentPage: number;
}

export const fetchPosts = async ({
  pageParam = 1,
}): Promise<FetchPostsResponse> => {
  const response = await fetch(`${API_URL}/post?page=${pageParam}&pageSize=3`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};
