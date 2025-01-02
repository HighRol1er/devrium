import { BASE_URL } from '@/shared/constant/baseUrl';
import { DeleteCommentRequestDto } from '@/types/comment';

export const deleteComment = async ({
  commentId,
  userId,
}: DeleteCommentRequestDto): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/comment/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete comment');
  }
  return response.json();
};
