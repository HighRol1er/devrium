import { auth } from '@/app/lib/auth';
import { validateUser } from '@/app/lib/hooks';

import { redirect } from 'next/navigation';
import PostCard from './components/PostCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
