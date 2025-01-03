import { CornerDownRight } from 'lucide-react';
import Link from 'next/link';
// import type { Comment } from '@prisma/client';
interface MyPostProps {
  comment: any;
}

// title이 있었으면 좋겠는데
export default function MyCommentCard({ comment }: MyPostProps) {
  return (
    <div className="mb-2 rounded-lg p-4 shadow-md">
      <Link href={`/home/post/${comment.postId}`}>
        <div className="flex gap-1 text-sm"></div>
        <h2 className="mb-2 text-lg font-bold">{comment.post.title}</h2>
        <span className="flex items-center gap-3 text-sm">
          <CornerDownRight className="text-gray-400" /> {comment.content}
        </span>
        {/* <PostStats statCount={post._count} /> */}
      </Link>
    </div>
  );
}
