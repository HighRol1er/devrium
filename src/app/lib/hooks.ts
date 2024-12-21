import { redirect } from 'next/navigation';
import { auth } from './auth';

interface CustomUser {
  id: string;
  tagName: string | null;
}

// Extending the Session type
declare module 'next-auth' {
  interface Session {
    user: CustomUser;
  }
}

// 유저 session 검사 front
export async function validateUser() {
  const session = await auth();
  console.log(session?.user);
  if (!session?.user) {
    return redirect('/');
  }
  const { id, tagName } = session.user;

  if (!tagName) {
    return redirect(`/set-tagname/${id}`);
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
