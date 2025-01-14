import { IPost } from '@/types/post';
import { User2 } from 'lucide-react';
import Link from 'next/link';
import PostStats from './PostStats';

interface PostCardProps {
  post: IPost;
}
export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="mb-4 rounded-lg p-4 shadow-md">
      <div>
        <div className="mb-2 flex gap-2">
          {post.user?.image ? (
            <Link
              href={`/profile/${post.userId}`}
              className="mb-2 flex items-center space-x-2"
            >
              <img
                src={post?.user?.image as string}
                alt="profileImage"
                className="h-10 w-10 rounded-full"
                width={32}
                height={32}
              />
            </Link>
          ) : (
            <User2 className="h-8 w-8 rounded-full border-b" />
          )}
          <div className="flex -translate-y-1 flex-col">
            <span className="font-semibold">{post?.user?.name}</span>
            <span className="text-sm text-gray-400">
              @{post?.user?.tagName}
            </span>
          </div>
        </div>
        <Link href={`/home/post/${post.id}`} className="block">
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
      </div>
      <div>
        <PostStats statCount={post._count} userId={post.userId} />
      </div>
    </div>
  );
}
