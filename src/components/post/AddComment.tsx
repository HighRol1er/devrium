import { Comment } from '@/schema/createCommentSchema';
import { useCreateComment } from '@/services/post/queries/useCreateComment';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export default function AddComment({ postId }: { postId: string }) {
  // NOTE: 로그인 할 때 userId를 불러오려면 profile page를 한번 들렸다가 와야하는데 이 문제는 따로 해결을 해줘야겠다.

  const { mutate, isPending } = useCreateComment();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Comment>({
    defaultValues: {
      comment: '',
    },
  });

  const onSubmitComment: SubmitHandler<Comment> = async (data) => {
    const comment = data.comment;

    mutate(
      { content: comment, postId: postId },
      {
        onSuccess: () => {
          alert('Comment created successfully!');
        },
        onError: (error) => {
          console.error('Error creating post:', error);
          alert('Failed to create comment. Please try again.');
        },
      }
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit(onSubmitComment)}>
          <Textarea
            placeholder="Be Gentle!!"
            className="mb-4 mt-4 h-24"
            id="comment"
            {...register('comment', { required: 'Comment field is empty' })}
          />
          {errors.comment && (
            <span className="text-red-500">{errors.comment.message}</span>
          )}
          <div className="flex justify-end">
            <Button>Add Comment</Button>
          </div>
        </form>
      </div>
    </>
  );
}
