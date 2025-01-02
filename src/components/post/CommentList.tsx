import { IPost } from '@/types/post';
import CommentItem from './CommentItem';

interface CommentListProps {
  data?: IPost;
}

export default function CommentList({ data }: CommentListProps) {
  const comments = data?.comments || [];

  return (
    <>
      <div>
        <h2 className="mb-3 font-semibold">Comments</h2>
        <div className="flex flex-col gap-4 border-l-4 p-3 shadow-md">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first comment!
            </p>
          )}
        </div>
      </div>
    </>
  );
}
