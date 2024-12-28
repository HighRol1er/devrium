import { IPost } from '@/types/post';
import PostStats from '../home/PostStats';

interface PostContentProps {
  data: IPost;
}

export default function PostContent({ data }: PostContentProps) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 flex items-center">
        <img
          src={data?.user.image as string}
          className="mr-3 h-10 w-10 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{data?.title}</h2>
          <p className="text-sm text-gray-400">{data?.user.name}</p>
        </div>
      </div>
      <div className="">
        <article className="mb-4 h-[50vh]">{data?.content}</article>
        <hr className="mb-4" />
        <PostStats />
      </div>
    </div>
  );
}
