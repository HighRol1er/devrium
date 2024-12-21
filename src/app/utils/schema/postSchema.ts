import { z } from 'zod';
export const createPostSchema = z.object({
  title: z.string().nonempty('title required'),
  content: z.string().nonempty('content required'),
  userId: z.string().nonempty('userId required'),
});
export type createPostDto = z.infer<typeof createPostSchema>;
