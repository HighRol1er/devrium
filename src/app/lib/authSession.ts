import { redirect } from 'next/navigation';
import { auth } from './auth';

// 유저 session 검사 front
export async function validateUser() {
  const session = await auth();
  console.log(session?.user);
  //NOTE: 이거 키면 307 박살난다... 무한 리다이렉트 거림
  // if (!session?.user) {
  //   return redirect('/');
  // }
  // const { id, tagName } = session.user;

  // if (!tagName || !session.user) {
  //   return redirect(`/set-tagname/${id}`);
  // }
  return session;
}
