import { useMutation } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_URL;

interface CreatePostDto {
  title: string;
  content: string;
  categoryId: number;
}

export const useCreatePost = () => {
  return useMutation({
    mutationFn: async ({ title, content, categoryId }: CreatePostDto) => {
      const response = await fetch(`${API_URL}/api/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, categoryId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      return response.json();
    },
    onSuccess: (data) => {
      console.log('Post created successfully', data);
    },
    onError: (error) => {
      console.error('Failed to create post:', error);
    },
  });
};
