import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().nonempty('Title required'),
  markdown: z.string().nonempty('Content required'),
});

export type CreatePost = z.infer<typeof createPostSchema>;
