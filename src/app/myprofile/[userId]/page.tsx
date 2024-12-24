import PostCard from '@/app/(home)/home/components/PostCard';
import { validateUser } from '@/app/lib/authSession';
import { IUser } from '@/types/user';
import { Post } from '@prisma/client';
import { fetchMyProfile } from '../_api/fetchUser';
import ProfileCard from '../components/ProfileCard';
import ProfileSidebar from '../components/ProfileSidebar';

export default async function MyProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  const session = await validateUser();

  // Next에서 이렇게 써도 되는이유 즉, useEffect를 안써도 되는 이유 뭔지 다시 찾아보기.
  /**렌더링 전에 데이터를 서버에서 미리 가져옵니다.
따라서, 데이터를 클라이언트 컴포넌트에서 가져올 필요가 없습니다. */
  const myInfo: IUser = await fetchMyProfile(userId); // any 타입이네용 ..
  console.log(myInfo);

  return (
    <>
      <div className="flex min-h-screen justify-center gap-2 pr-2">
        <div className="w-full border-r bg-muted/40 p-6 shadow-md">
          <ProfileCard myInfo={myInfo} />

          {myInfo.posts.map((post: Post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <ProfileSidebar myInfo={myInfo} />
      </div>
    </>
  );
}
