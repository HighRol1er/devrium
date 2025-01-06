'use client';

import MyCommentCard from '@/components/profile/MyCommentCard';
import MyPost from '@/components/profile/MyPost';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProfileSkeleton from '@/components/profile/skeleton/ProfileSkeleton';
import { useGetProfile } from '@/services/profile/queries/useGetProfile';
import { useProfileCategoryStore } from '@/store/profileCategory/useProfileStore';

export default function ProfilePage({ userId }: { userId: string }) {
  /**
   * 질문 
   * profileData 가 IUser | undefined 타입을 가질 수 있는데.
   *   if (!profileData) {
    return <div>data not exist</div>;
  } 이렇게 에러 처리해주는 것보다 나은 방법이 있는지 궁금
   * **/
  const { data: profileData, isLoading, isError } = useGetProfile(userId);

  const { category } = useProfileCategoryStore();
  // console.log(data);

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (!profileData) {
    return <div>data not exist</div>;
  }

  return (
    <>
      <div className="flex min-h-screen justify-center gap-2 pr-2">
        <div className="w-full border-r bg-muted/40 p-6 shadow-md">
          <ProfileCard data={profileData} />
          {category === 'posts' &&
            profileData?.posts.map((post: any) => (
              <MyPost key={post.id} post={post} />
            ))}
          {category === 'comments' &&
            profileData.comments.map((comment) => (
              <MyCommentCard key={comment.id} comment={comment} />
            ))}
          {category === 'bookmark' && <div>bookmark </div>}
        </div>
        <ProfileSidebar data={profileData} />
      </div>
    </>
  );
}
