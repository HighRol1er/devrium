import { Post } from '@prisma/client';
import { IComment } from './comment';
export interface IPost extends Post {
  user: {
    name: string;
    tagName: string | null;
    image: string | null;
  };
  comments: IComment[];
  _count: {
    comments: number;
    likes: number;
  };
}

export interface createPostRequest {
  title: string;
  content: string;
  categoryId: number;
}
