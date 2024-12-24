import { validateUser } from '@/app/lib/authSession';
import ButtonGroup from '../components/ButtonGroup';
import ProfileSidebar from '../components/ProfileSidebar';
import PostCard from '@/app/(home)/home/components/PostCard';
import { PenLine } from 'lucide-react';

import { Post } from '@prisma/client';

export async function fetchUser(userId: string) {
  const response = await fetch(`http://localhost:3000/api/profile/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
}

export default async function ProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const session = await validateUser();

  // Next에서 이렇게 써도 되는이유 즉, useEffect를 안써도 되는 이유 뭔지 다시 찾아보기.
  /**렌더링 전에 데이터를 서버에서 미리 가져옵니다.
따라서, 데이터를 클라이언트 컴포넌트에서 가져올 필요가 없습니다. */
  const user = await fetchUser(params.userId); // any 타입이네용 ..
  console.log('User:', user);
  // const session = await fetchSession();

  return (
    <>
      <div className="flex min-h-screen justify-center gap-2 pr-2">
        <div className="w-full border-r bg-muted/40 p-6 shadow-md">
          <div className="mb-6 flex items-center gap-4">
            <img
              src={session?.user?.image as string}
              alt="profile image"
              className="w-16 rounded-full"
            />
            <div>
              <h1 className="flex items-center text-2xl font-bold">
                {session?.user?.name}{' '}
                <PenLine className="ml-4 mt-2 size-5 hover:text-red-400" />
              </h1>
              <p className="text-sm">@{session?.user.tagName}</p>
            </div>
          </div>
          <div className="ml-4 flex gap-2 text-sm font-semibold opacity-50">
            <div>Follwers {user.follower.length}</div>
            <div>Follwing {user.following.length}</div>
          </div>

          <div className="mb-6 rounded-lg border-b p-4">
            <h2 className="mb-4 text-xl font-semibold">Overview</h2>
            <div className="flex gap-4">
              <ButtonGroup userId={params.userId} />
            </div>
          </div>
          {user.posts.map((post: Post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              content={post.content}
              categoryId={post.categoryId}
              image={post.image}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
            />
          ))}
        </div>
        <ProfileSidebar />
      </div>
    </>
  );
}
