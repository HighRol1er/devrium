import { useQueryClient, useMutation } from '@tanstack/react-query';
import { CommentRequestDto } from '@/types/comment';
import { createComment } from '../createComment';

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, content }: CommentRequestDto) =>
      createComment({ postId, content }),
    onSuccess: () => {
      console.log('successfully create comment');
      queryClient.invalidateQueries({ queryKey: ['postDetail'] });
    },
    onError: (error) => {
      console.error('Error creating comment', error);
    },
  });
};
