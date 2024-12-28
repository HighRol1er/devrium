import { Post } from '@prisma/client';
export interface IPost extends Post {
  user: {
    name: string;
    tagName: string | null;
    image: string | null;
  };
}
