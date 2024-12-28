import { z } from 'zod';

export const tagNameSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .nonempty('Name is required'),
});

export type TagName = z.infer<typeof tagNameSchema>;
