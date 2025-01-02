import { followUser, unFollowUser } from '@/services/profile/Follow.';
import { Button } from '../ui/button';

interface FollowButtonProps {
  userId: string;
}

export default function FollowButton({ userId }: FollowButtonProps) {
  const onClickFollowUser = async () => {
    try {
      const response = await followUser({ userId });
      console.log('follow success');
      alert('follow success');
    } catch (error) {
      console.error(error);
    }
  };

  const onClickUnFollowUser = async () => {
    try {
      const response = await unFollowUser({ userId });
      console.log('unFollow success');
      alert('unFollow success');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        onClick={onClickFollowUser}
        variant="outline"
        className="rounded-full font-semibold hover:border-green-600 hover:text-green-600"
      >
        Follow
      </Button>
      <Button
        onClick={onClickUnFollowUser}
        variant="outline"
        className="rounded-full font-semibold hover:border-red-600 hover:text-red-600"
      >
        Unfollow
      </Button>
    </>
  );
}
