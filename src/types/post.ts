import { Post } from '@prisma/client';
import { IComment } from './comment';
export interface IPost extends Post {
  user: {
    name: string;
    tagName: string | null;
    image: string | null;
  };
  comments: IComment[];
}

export interface createPostRequest {
  title: string;
  content: string;
  categoryId: number;
}
