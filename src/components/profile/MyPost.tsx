import Link from 'next/link';
import PostStats from '../home/PostStats';
import { IPost } from '@/types/post';

interface MyPostProps {
  // post: {
  //   id: number;
  //   userId: string;
  //   image: string | null;
  //   categoryId: number | null;
  //   title: string;
  //   content: string;
  //   createdAt: Date;
  //   updatedAt: Date;
  //   user?: {
  //     image: string | null;
  //     tagName: string;
  //   };
  // };
  post: IPost;
}

export default function MyPost({ post }: MyPostProps) {
  // console.log(post);
  return (
    <div className="mb-4 rounded-lg p-4 shadow-md">
      <Link href={`/home/postdetail/${post.id}`}>
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
        <p className="mb-4">{post?.content}</p>
        <PostStats statCount={post._count} />
      </Link>
    </div>
  );
}
