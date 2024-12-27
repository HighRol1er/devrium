import usePostStore from '@/store/post/postStore';
import { MessageSquareMore, Share, ThumbsUp, User2 } from 'lucide-react';
import Link from 'next/link';

// PostCard는 게시글의 본문 내용을 보여주는데 한 몇백자 까지만 보여주도록해야겠음.

export default function PostCard({ postId }: { postId: number }) {
  const post = usePostStore((state) =>
    state.posts.find((p) => p.id === postId)
  );
  // console.log('post user Image >>>', post?.user.image);

  // post 없으면 error.tsx로 이동시키던가 해야할듯
  if (!post) return null;

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

          <p className="font-semibold">{post?.user.tagName}</p>
        </Link>
        <div className="mb-2 flex gap-1 text-sm">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1">
            {post?.categoryId}
          </span>
        </div>
        <h2 className="mb-2 text-lg font-bold">{post?.title}</h2>
        <p className="mb-4">{post?.content}</p>
        <div className="flex space-x-4 text-sm text-gray-400">
          <button className="flex gap-1 hover:text-blue-500">
            <ThumbsUp className="size-4" />
            <p className="">8</p>
          </button>
          <button className="flex gap-1 hover:text-blue-500">
            <MessageSquareMore className="size-4" />
            <p className="">10</p>
          </button>
          <button className="flex gap-1 hover:text-blue-500">
            <Share className="size-4" />
            <p className="">Share</p>
          </button>
        </div>
      </Link>
    </div>
  );
}
