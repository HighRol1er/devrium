import { IPost } from '@/types/post';
import { User2 } from 'lucide-react';
import Link from 'next/link';
import PostStats from './PostStats';

// PostCard는 게시글의 본문 내용을 보여주는데 한 몇백자 까지만 보여주도록해야겠음.
// postId: Interface로 만들어서 컨벤션
// postCard Props
interface PostCardProps {
  post: IPost;
}
export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="mb-4 rounded-lg p-4 shadow-md">
      <Link href={`/home/post/${post.id}`}>
        <Link
          href={`/profile/${post.userId}`}
          className="mb-2 flex items-center space-x-2"
        >
          {post.user?.image ? (
            <img
              src={post?.user?.image as string}
              alt="profileImage"
              className="h-8 w-8 rounded-full"
              width={32}
              height={32}
            />
          ) : (
            <User2 className="h-8 w-8 rounded-full border-b" />
          )}

          <p className="font-semibold">{post?.user?.tagName}</p>
        </Link>
        <div className="mb-2 flex gap-1 text-sm">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1">
            {(() => {
              switch (post?.categoryId) {
                case 1:
                  return 'Coderium';
                case 2:
                  return 'Question';
                case 3:
                  return 'Crew';
                case 4:
                  return 'Reference';
                case 5:
                  return 'Meme';
                default:
                  return 'Unknown';
              }
            })()}
          </span>
        </div>
        <h2 className="mb-2 text-lg font-bold">{post?.title}</h2>
        <p className="mb-4">
          {post?.content.length > 150
            ? `${post.content.substring(0, 150)} ...`
            : post?.content}
        </p>
      </Link>
      <PostStats statCount={post._count} userId={post.userId} />
    </div>
  );
}

// const CATEGORY = { 1: 'Coderium', 2: 'Question',} as const
// CATEGORY[categoryId]
