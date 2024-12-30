import { IPost } from '@/types/post';
import { User } from 'lucide-react';

interface CommentListProps {
  data?: IPost;
}

export default function CommentList({ data }: CommentListProps) {
  const comments = data?.comments || [];

  return (
    <>
      <div>
        <h2 className="mb-3 font-semibold">Comments</h2>
        <div className="mb-2 border-l-4 p-3 shadow-md">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <div className="mb-2 flex gap-2">
                  {comment.user.image ? (
                    <img
                      src={comment.user.image}
                      alt={comment.user.name}
                      className="size-8 rounded-full"
                    />
                  ) : (
                    <User />
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      {comment.user.name}
                    </span>
                    <span className="text-[12px] font-semibold text-gray-400">
                      @{comment.user.tagName}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{comment.content}</p>
                <span className="text-xs text-gray-400">
                  {new Date(comment.createdAt).toLocaleString()}
                </span>
              </div>
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
