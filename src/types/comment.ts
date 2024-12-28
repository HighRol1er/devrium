import { Comment, User } from '@prisma/client';

export interface CommentRequestDto {
  userId: string;
  content: string;
  postId: string;
}

export interface IComment extends Comment {
  user: {
    name: string;
    tagName: string | null;
    image: string | null;
  };
}
