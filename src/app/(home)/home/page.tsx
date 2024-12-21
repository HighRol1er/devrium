import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { validateUser } from '@/app/lib/hooks';
import PostCard from './components/PostCard';

export default async function HomePage() {
  const session = await validateUser();

  return (
    <>
      <div className="grid">
        <Button className="w-40 justify-self-end">
          <Link href="/home/createpost">Create Post</Link>
        </Button>

        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}
