'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PostCard from './components/PostCard';
import { useFetchPost } from './_api/fetchPost';

export default function HomePage() {
  const { data, isLoading, isError } = useFetchPost();
  console.log(data);
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
