'use client';

import MyPost from '@/components/profile/MyPost';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import { useGetMyProfile } from '@/services/profile/queries/useGetMyProfile';
import { useProfileStore } from '@/store/profile/profileStore';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function ProfilePage() {
  // const [category, setCategory] = useState("comment") // true면 comment만 보여주기?
  const params = useParams<{ userId: string }>();
  const session = useSession();

  const { data, isLoading, isError } = useGetMyProfile(params.userId);
  console.log(data);

  const setProfile = useProfileStore((state) => state.setProfile);
  const setSideProfile = useProfileStore((state) => state.setSideProfile);

  useEffect(() => {
    if (data && params.userId === session.data?.user.id) {
      setProfile({
        image: data.image,
        name: data.name,
        tagName: data.tagName ?? '',
        follower: data.follower.length,
        following: data.following.length,
        userId: data.id,
      });
      setSideProfile({
        createdAt: data.createdAt,
        postCount: data.posts.length,
        commentCount: data.comments.length,
      });
    }
  }, [data, setProfile, setSideProfile]);

  // NOTE: 왜 useEffect가 isLoading 아래에 있으면 안될까?
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>data not exist</div>;
  }

  return (
    <>
      <div className="flex min-h-screen justify-center gap-2 pr-2">
        <div className="w-full border-r bg-muted/40 p-6 shadow-md">
          <ProfileCard data={data} />
          {data?.posts.map((post: any) => <MyPost key={post.id} post={post} />)}
        </div>
        <ProfileSidebar data={data} />
      </div>
    </>
  );
}
