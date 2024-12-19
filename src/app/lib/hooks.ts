import { redirect } from 'next/navigation';
import { auth } from './auth';

// 유저의 session 검사
export async function validateUser() {
  const session = await auth();

  if (!session?.user) {
    return redirect('/');
  }
  return session;
}
