import { z } from 'zod';

export const commentSchema = z.object({
  comment: z.string().nonempty('Comment is required'),
});

export type Comment = z.infer<typeof commentSchema>;
