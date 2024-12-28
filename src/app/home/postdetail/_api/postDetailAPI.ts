import { IPost } from '@/store/post/postStore';
import { Comment } from '@prisma/client';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_URL;

const fetchPostDetail = async (postId: string) => {
  const response = await fetch(`${API_URL}/api/post/${postId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch postDetail');
  }

  return response.json();
};

export const useFetchPostDetail = (postId: string) => {
  return useQuery<IPost>({
    queryKey: ['postDetail', postId],
    queryFn: () => fetchPostDetail(postId),
  });
};

const createComment = async (postId: string, comment: string) => {
  const response = await fetch(`${API_URL}/api/post/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment }),
  });

  if (!response.ok) {
    throw new Error('Failed to create comments');
  }
  return response.json();
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, comment }: { postId: string; comment: string }) =>
      createComment(postId, comment),
    onSuccess: (data) => {
      console.log('successfully create comment');
      // queryClient.invalidateQueries(['postComments']);
    },
    onError: (error) => {
      console.error('Error creating comment', error);
    },
  });
};
