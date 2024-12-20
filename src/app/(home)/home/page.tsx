import { auth } from '@/app/lib/auth';
import { validateUser } from '@/app/lib/hooks';

import { redirect } from 'next/navigation';
import PostCard from './components/PostCard';

export default async function HomePage() {
  // const session = await validateUser();

  return (
    <div>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
