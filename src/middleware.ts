import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });
  // console.log('token >>>', token);
  if (!token) {
    const redirectUrl = new URL('/', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  if (!token.tagName) {
    const redirectUrl = new URL(`/set-tagname/${token.id}`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // 세션이 있으면 요청을 계속 진행
  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/profile/:path*'], // 세션을 확인할 경로 설정
};
