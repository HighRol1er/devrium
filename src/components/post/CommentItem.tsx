import { IComment } from '@/types/comment';
import { User, X } from 'lucide-react';
import CommentDeleteBtn from './DeleteCommentBtn';

interface CommentItemProps {
  comment: IComment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  // console.log(comment.id);
  return (
    <div key={comment.id} className="border-b border-solid">
      <div className="mb-2 flex justify-between gap-2">
        <div className="flex">
          {comment.user.image ? (
            <img
              src={comment.user.image}
              alt={comment.user.name}
              className="size-8 rounded-full"
            />
          ) : (
            <User />
          )}
          <div className="ml-2 flex flex-col">
            <span className="text-sm font-semibold">{comment.user.name}</span>
            <span className="text-[12px] font-semibold text-gray-400">
              @{comment.user.tagName}
            </span>
          </div>
        </div>
        {/* <X className="size-4 hover:text-red-500" /> */}
        <CommentDeleteBtn commentId={comment.id} userId={comment.userId} />
      </div>
      <p className="text-sm text-gray-600">{comment.content}</p>
      <span className="text-xs text-gray-400">
        {new Date(comment.createdAt).toLocaleString()}
      </span>
    </div>
  );
}
