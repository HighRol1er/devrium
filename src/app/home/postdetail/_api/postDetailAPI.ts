import { CommentRequestDto } from '@/types/comment';
import { IPost } from '@/types/post';
import { Comment } from '@prisma/client';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_URL;

const fetchPostDetail = async (postId: string): Promise<IPost> => {
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

const createComment = async ({
  postId,
  content,
  userId,
}: CommentRequestDto): Promise<void> => {
  const response = await fetch(`${API_URL}/api/post/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content, userId, postId }),
  });

  if (!response.ok) {
    throw new Error('Failed to create comments');
  }
  return response.json();
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, content, userId }: CommentRequestDto) =>
      createComment({ postId, content, userId }),
    onSuccess: () => {
      console.log('successfully create comment');
      queryClient.invalidateQueries({ queryKey: ['postDetail'] });
    },
    onError: (error) => {
      console.error('Error creating comment', error);
    },
  });
};
