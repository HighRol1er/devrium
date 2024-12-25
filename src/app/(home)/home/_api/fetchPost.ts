import { Post } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_URL;

export const fetchAllPost = async () => {
  const response = await fetch(`${API_URL}/post`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const useFetchPost = () => {
  return useQuery<Post>({
    queryKey: ['post'],
    queryFn: () => fetchAllPost(),
  });
};
