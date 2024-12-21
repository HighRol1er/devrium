import { z } from 'zod';
export const createPostSchema = z.object({
  title: z.string().nonempty('title required'),
  content: z.string().nonempty('content required'),
  categoryId: z.number(),
});
export type createPostDto = z.infer<typeof createPostSchema>;