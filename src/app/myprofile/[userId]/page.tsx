'use client';

import { use, useEffect } from 'react';
import { useProfileStore } from '@/store/profile/profileStore';
import { useGetMyProfile } from '@/_api/myProfile/queries/useGetMyProfile';
import ProfileSidebar from '@/components/myProfile/ProfileSidebar';
import ProfileCard from '@/components/myProfile/ProfileCard';

export default function MyProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = use(params);
  //

  const { data, isLoading, isError } = useGetMyProfile(userId);

  const setProfile = useProfileStore((state) => state.setProfile);
  const setSideProfile = useProfileStore((state) => state.setSideProfile);

  // NOTE:저장을 할꺼면 아예 로그인을 할 때 저장을 하게끔
  useEffect(() => {
    if (data) {
      setProfile({
        image: data.image || null,
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
  }, [setProfile, data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex min-h-screen justify-center gap-2 pr-2">
        <div className="w-full border-r bg-muted/40 p-6 shadow-md">
          <ProfileCard />
          {/* {data?.posts.map((post: Post) => (
            <PostCard key={post.id} {...post} />
          ))} */}
        </div>
        <ProfileSidebar />
      </div>
    </>
  );
}
