import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost, CreatePostDto } from '../createPost';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, content, categoryId, image }: CreatePostDto) =>
      createPost({ title, content, categoryId, image }),
    onSuccess: (data) => {
      console.log('Post created successfully', data);
      queryClient.invalidateQueries({ queryKey: ['posts'] }); // 'post' querykey 값은 상수로 권장
    },
    onError: (error) => {
      console.error('Failed to create post:', error);
    },
  });
};
