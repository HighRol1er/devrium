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
      <Link href={`/home/postdetail/${post.id}`}>
        <Link
          href={`/myprofile/${post.userId}`} // 수정 필요 myProfile이 아니라 해당 게시물을 올린 userId의 프로필로 이동
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
            {post?.categoryId}
          </span>
        </div>
        <h2 className="mb-2 text-lg font-bold">{post?.title}</h2>
        <p className="mb-4">{post?.content}</p>
        <PostStats />
      </Link>
    </div>
    // <div>hello from postcard</div>
  );
}