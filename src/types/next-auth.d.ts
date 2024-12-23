import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Extend the default User object from NextAuth
   */
  interface User {
    tagName?: string | null;
    emailVerified?: Date | null;
  }

  /**
   * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
  }
}
