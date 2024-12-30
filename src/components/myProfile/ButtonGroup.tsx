import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface IButtonGroupProps {
  userId: string;
}

export default function ButtonGroup({ userId }: IButtonGroupProps) {
  return (
    <>
      <Link href={`/myprofile/${userId}`}>
        <Button
          variant="ghost"
          className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
        >
          Posts
        </Button>
      </Link>

      <Link href={`/myprofile/${userId}/comments`}>
        <Button
          variant="ghost"
          className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
        >
          Comments
        </Button>
      </Link>

      <Link href={`/myprofile/${userId}/bookmark`}>
        <Button
          variant="ghost"
          className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
        >
          Bookmark
        </Button>
      </Link>
    </>
  );
}
