import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { JWT } from 'next-auth/jwt';
import prisma from './db';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    async jwt({
      token,
      user,
      trigger,
      session,
    }: {
      token: JWT;
      user?: any;
      trigger?: string;
      session?: any;
    }): Promise<JWT> {
      // 초기 로그인 시 사용자 정보를 토큰에 추가
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
        token.tagName = user.tagName;
      }

      // 사용자 정보가 수정될 때 토큰에 새 값을 추가
      if (trigger === 'update' && session?.tagName) {
        token.tagName = session.tagName;
      }
      return token;
    },
    async session({ session, token }: any) {
      // session에 userId 추가
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});
