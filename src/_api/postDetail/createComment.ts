import { BASE_URL } from '@/shared/constant/baseUrl';
import { CommentRequestDto } from '@/types/comment';

export const createComment = async ({
  postId,
  content,
  userId,
}: CommentRequestDto): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/post/${postId}/comments`, {
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
