'use client';

import { useProfileStore } from '@/store/profile/profileStore';
import { use, useEffect } from 'react';
import { useFetchMyProfile } from '../_api/fetchUser';
import ProfileCard from '../../../components/myProfile/ProfileCard';
import ProfileSidebar from '../../../components/myProfile/ProfileSidebar';

export default function MyProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = use(params);
  //

  const { data, isLoading, isError } = useFetchMyProfile(userId);

  const setProfile = useProfileStore((state) => state.setProfile);
  const setSideProfile = useProfileStore((state) => state.setSideProfile);

  // 이거 userId 저장하는건 홈에 들어왔을 때 했어야했넹..
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
          {/* {data?.posts.map((post: Post) => (
            <PostCard key={post.id} {...post} />
          ))} */}
        </div>
        <ProfileSidebar />
      </div>
    </>
  );
}
