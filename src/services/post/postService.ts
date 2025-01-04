import { BASE_URL } from '@/shared/constant/baseUrl';
import { CommentRequestDto } from '@/types/comment';
import { IPost } from '@/types/post';

export const getPostDetail = async (postId: string): Promise<IPost> => {
  const response = await fetch(`${BASE_URL}/api/post/${postId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch postDetail');
  }

  return response.json();
};

export const deletePost = async (postId: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/post/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to delete post');
  }
};

export const createComment = async ({
  postId,
  content,
}: CommentRequestDto): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/post/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content, postId }),
  });

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }
  return response.json();
};

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
