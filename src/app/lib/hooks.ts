import { redirect } from 'next/navigation';
import { auth } from './auth';

// 유저의 session 검사 (front)
export async function validateUser() {
  const session = await auth();
  console.log(session);
  if (!session?.user) {
    return redirect('/');
  }
  return session;
}

// 유저 session 검사 (back)
export async function verifyUserSession() {
  // requestUserId: string
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error('User not authenticated');
  }

  // if (userId !== requestUserId) {
  //   throw new Error('Unauthorized');
  // }
  return userId;
}
