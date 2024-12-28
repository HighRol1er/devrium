import { MessageSquareMore, Share, ThumbsUp } from 'lucide-react';

export default function PostStats() {
  return (
    <div className="mb-2 flex space-x-4 text-sm text-gray-400">
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
  );
}
