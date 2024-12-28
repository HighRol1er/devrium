import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().nonempty('title required'),
  markdown: z.string().nonempty('content required'),
});

export type CreatePost = z.infer<typeof createPostSchema>;
