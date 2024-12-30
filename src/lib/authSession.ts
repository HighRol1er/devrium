import { auth } from './auth';

export async function validateUser() {
  const session = await auth();
  return session;
}
