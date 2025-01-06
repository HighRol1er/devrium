import { DeleteCommentRequestDto } from '@/types/comment';
import { BASE_URL } from '@/shared/constant/baseUrl';
import { CommentRequestDto } from '@/types/comment';
import { IPost } from '@/types/post';
import { HttpMethod, requestOptions } from '@/services/fetch/requestOption';

export const getPostDetail = async (postId: string): Promise<IPost> => {
  const response = await fetch(
    `${BASE_URL}/api/post/${postId}`,
    requestOptions()
  );

  if (!response.ok) {
    throw new Error('Failed to fetch postDetail');
  }

  return response.json();
};

export const deletePost = async (postId: string): Promise<void> => {
  const response = await fetch(
    `${BASE_URL}/api/post/${postId}`,
    requestOptions(HttpMethod.DELETE)
  );

  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
};

export const createComment = async ({
  postId,
  content,
}: CommentRequestDto): Promise<void> => {
  const response = await fetch(
    `${BASE_URL}/api/post/${postId}/comments`,
    requestOptions(HttpMethod.POST, { content, postId })
  );

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }
  return response.json();
};

export const deleteComment = async ({
  commentId,
  userId,
}: DeleteCommentRequestDto): Promise<void> => {
  const url = `${BASE_URL}/api/comment/${commentId}`;

  const response = await fetch(
    url,
    requestOptions(HttpMethod.DELETE, { userId })
  );

  if (!response.ok) {
    throw new Error('Failed to delete comment');
  }
  return response.json();
};
