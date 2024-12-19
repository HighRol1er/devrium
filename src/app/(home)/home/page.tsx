import { auth } from '@/app/lib/auth';
import { validateUser } from '@/app/lib/hooks';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  // const session = await validateUser();

  return (
    <div>
      <h1>hello from homepage</h1>
    </div>
  );
}
