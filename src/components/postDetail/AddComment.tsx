import { useCreateComment } from '@/app/home/postdetail/_api/postDetailAPI';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { title } from 'process';
import { useProfileStore } from '@/store/profile/profileStore';

export const commentSchema = z.object({
  comment: z.string().nonempty('Comment is required'),
});

export type Comment = z.infer<typeof commentSchema>;

export default function AddComment({ postId }: { postId: string }) {
  const profile = useProfileStore((state) => state.profile);
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
    console.log(postId);
    mutate(
      { content: comment, postId: postId, userId: profile.userId },
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
            className="mb-4 h-24"
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
