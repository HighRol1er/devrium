import { MessageSquareMore, Share, ThumbsUp, User2 } from 'lucide-react';

export default function PostCard({ post }: any) {
  return (
    <div className="mb-4 rounded-lg p-4 shadow-md">
      <div className="mb-2 flex items-center space-x-2">
        <User2 className="h-8 w-8 rounded-full border-b" />
        <p className="font-semibold">Username</p>
      </div>
      {/* <div className="mb-2 text-sm">"r/CryptoTechnology</div> */}
      <div className="mb-2 flex gap-1 text-sm">
        <span className="inline-block self-end rounded-full bg-primary/20 px-3 py-1">
          r/CryptoTechnology
        </span>
        <span className="inline-block rounded-full bg-primary/20 px-3 py-1">
          Question
        </span>
      </div>
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
    </div>
  );
}
