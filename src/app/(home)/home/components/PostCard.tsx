import { MessageSquareMore, Share, ThumbsUp } from 'lucide-react';

export default function PostCard() {
  return (
    <div className="mb-4 rounded-lg p-4 shadow-md">
      <div className="mb-2 text-sm">"r/CryptoTechnology</div>
      <h2 className="mb-2 text-lg font-bold">What is Lorem Ipsum?</h2>
      <p className="mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="flex space-x-4 text-sm text-gray-400">
        <div className="flex gap-1">
          <ThumbsUp className="size-4" />
          <p className="">8</p>
        </div>
        <div className="flex gap-1">
          <MessageSquareMore className="size-4" />
          <p className="">10</p>
        </div>
        <div className="flex gap-1">
          <Share className="size-4" />
          <p className="">Share</p>
        </div>
      </div>
    </div>
  );
}
