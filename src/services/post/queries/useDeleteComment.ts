import { useQueryClient, useMutation } from '@tanstack/react-query';
import { DeleteCommentRequestDto } from '@/types/comment';
import { deleteComment } from '../postService';

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ commentId, userId }: DeleteCommentRequestDto) =>
      deleteComment({ commentId, userId }),
    onSuccess: () => {
      console.log('Successfully deleted comment');
      queryClient.invalidateQueries({ queryKey: ['postDetail'] });
    },
    onError: (error) => {
      console.error('Error deleteing comment', error);
    },
  });
};
