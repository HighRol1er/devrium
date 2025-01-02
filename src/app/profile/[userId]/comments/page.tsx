'use client';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import { useGetMyProfile } from '@/services/profile/queries/useGetMyProfile';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';

export default function MyComments() {
  const params = useParams<{ userId: string }>();
  const session = useSession();
  console.log(params);
  const { data, isLoading, isError } = useGetMyProfile(params.userId);
  console.log(data);

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
          {/* {data?.posts.map((post: any) => <MyPost key={post.id} post={post} />)} */}
        </div>
        <ProfileSidebar data={data} />
      </div>
    </>
  );
}
