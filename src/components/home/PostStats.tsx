'use client';

import { likePost } from '@/services/likePost/likePost';
import { MessageSquareMore, Share, ThumbsUp } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import DeleteBtn from '../post/DeleteBtn';

// import { useSelectedLayoutSegments } from 'next/navigation';

interface PostStatsProps {
  statCount: {
    comments: number;
    likes: number;
  };
  userId?: string;
}

export default function PostStats({ statCount, userId }: PostStatsProps) {
  const session = useSession();
  const pathname = usePathname();
  const postId = pathname.split('/').pop();

  const isHomePostPath = pathname.startsWith('/home/post/');

  const onClickLikePost = async () => {
    if (!userId || !postId) {
      console.error('userId or postId undefined');
      return;
    }
    const response = await likePost(userId, postId);
    console.log(response);
  };

  return (
    // <div className="mb-2 space-x-4 text-sm text-gray-400">
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex space-x-4 text-sm text-gray-400">
          <button
            onClick={onClickLikePost}
            className="flex gap-1 hover:text-blue-500"
          >
            <ThumbsUp className="size-4" />
            <p>{statCount?.likes}</p>
          </button>
          <button className="flex gap-1 hover:text-blue-500">
            <MessageSquareMore className="size-4" />
            <p>{statCount?.comments}</p>
          </button>
          <button className="flex gap-1 hover:text-blue-500">
            <Share className="size-4" />
            <p>Share</p>
          </button>
        </div>
        <div>
          {session.data?.user.id !== userId && isHomePostPath && (
            <DeleteBtn postId={postId} />
          )}
        </div>
      </div>
    </>
  );
}
