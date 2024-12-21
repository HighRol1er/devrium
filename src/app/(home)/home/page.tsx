import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { validateUser } from '@/app/lib/hooks';
import PostCard from './components/PostCard';

export default async function HomePage() {
  // ERROR : 이거 함수 실행하면 무한 렌더링 에러 나오네.. // 해결.
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
