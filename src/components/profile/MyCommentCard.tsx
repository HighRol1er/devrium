import Link from 'next/link';
import PostStats from '../home/PostStats';
import { IPost } from '@/types/post';

interface MyPostProps {
  comment: any;
}

export default function MyCommentCard({ comment }: MyPostProps) {
  return (
    <div className="mb-2 rounded-lg p-4 shadow-md">
      <Link href={`/home/post/${comment.postId}`}>
        <div className="flex gap-1 text-sm"></div>
        {/* <h2 className="mb-2 text-lg font-bold">{post?.title}</h2> */}
        <p className="text-sm">{comment.content}</p>
        {/* <PostStats statCount={post._count} /> */}
      </Link>
    </div>
  );
}
