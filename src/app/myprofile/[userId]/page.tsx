'use client';

import PostCard from '@/app/(home)/home/components/PostCard';
import { Post } from '@prisma/client';
import ProfileCard from '../components/ProfileCard';
import ProfileSidebar from '../components/ProfileSidebar';
import { useFetchMyProfile } from '../_api/fetchUser';
import { use, useEffect } from 'react';
import { useProfileStore } from '@/store/profile/profileStore';

export default function MyProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = use(params);

  const { data, isLoading, isError } = useFetchMyProfile(userId);

  const setProfile = useProfileStore((state) => state.setProfile);
  const setSideProfile = useProfileStore((state) => state.setSideProfile);

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
        createdAt: data.createdAt, // Date를 string으로 변환
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
          {data?.posts.map((post: Post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <ProfileSidebar />
      </div>
    </>
  );
}
