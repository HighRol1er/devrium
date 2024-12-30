import { MessageSquareMore, Share, ThumbsUp } from 'lucide-react';

interface PostStatsProps {
  statCount: {
    comments: number;
    likes: number;
  };
}

export default function PostStats({ statCount }: PostStatsProps) {
  return (
    <div className="mb-2 flex space-x-4 text-sm text-gray-400">
      <button className="flex gap-1 hover:text-blue-500">
        <ThumbsUp className="size-4" />
        <p>{statCount.likes}</p>
      </button>
      <button className="flex gap-1 hover:text-blue-500">
        <MessageSquareMore className="size-4" />
        <p>{statCount.comments}</p>
      </button>
      <button className="flex gap-1 hover:text-blue-500">
        <Share className="size-4" />
        <p>Share</p>
      </button>
    </div>
  );
}
