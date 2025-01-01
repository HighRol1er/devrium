import { Button } from '../ui/button';

export default function FollowButton() {
  return (
    <>
      <Button
        variant="outline"
        className="rounded-full font-semibold hover:border-green-600 hover:text-green-600"
      >
        Follow
      </Button>
      <Button
        variant="outline"
        className="rounded-full font-semibold hover:border-red-600 hover:text-red-600"
      >
        Unfollow
      </Button>
    </>
  );
}
