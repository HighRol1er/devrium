import { useDeleteComment } from '@/services/post/queries/useDeleteComment';
import { X } from 'lucide-react';

interface DeleteCommentBtnProps {
  commentId: string;
  userId: string;
}

export default function CommentDeleteBtn({
  commentId,
  userId,
}: DeleteCommentBtnProps) {
  const { mutate } = useDeleteComment();

  const onClickDelete = () => {
    mutate(
      { commentId, userId },
      {
        onSuccess: () => {
          alert('Comment delete successfully!');
        },
        onError: (error) => {
          console.error('Error deleteing comment:', error);
          alert('Failed to delete comment. Please try again.');
        },
      }
    );
  };

  return (
    <>
      <button onClick={onClickDelete}>
        <X className="size-4 hover:text-red-500" />
      </button>
    </>
  );
}
