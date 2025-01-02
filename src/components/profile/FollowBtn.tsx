import { followUser, unFollowUser } from '@/services/profile/Follow.';
import { Button } from '../ui/button';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface Follower {
  followedById: string;
  followingId: string;
}

interface FollowButtonProps {
  userId: string;
  followerList: Follower[];
}

export default function FollowBtn({ userId, followerList }: FollowButtonProps) {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const session = useSession();

  useEffect(() => {
    if (session?.data?.user.id) {
      const checkFollow = followerList.some(
        (follower) => follower.followingId === session.data?.user.id
      );
      setIsFollowing(checkFollow);
    }
  }, [session, followerList]);

  const onClickFollowUser = async () => {
    try {
      const response = await followUser({ userId });
      console.log('follow success');
      alert('follow success');
      setIsFollowing(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickUnFollowUser = async () => {
    try {
      const response = await unFollowUser({ userId });
      console.log('unFollow success');
      alert('unFollow success');
      setIsFollowing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isFollowing ? (
        <Button
          onClick={onClickUnFollowUser}
          variant="outline"
          className="rounded-full font-semibold hover:border-red-600 hover:text-red-600"
        >
          Unfollow
        </Button>
      ) : (
        <Button
          onClick={onClickFollowUser}
          variant="outline"
          className="rounded-full font-semibold hover:border-green-600 hover:text-green-600"
        >
          Follow
        </Button>
      )}
    </>
  );
}
