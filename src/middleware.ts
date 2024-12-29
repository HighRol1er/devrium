import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // 사용자의 세션 정보를 가져옵니다
  console.log('temp');

  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });
  console.log('token >>>', token);
  //
  // console.log('session >>>', session); // 현재 null 값임
  // 세션이 없으면 / 페이지로 리다이렉트
  if (!token) {
    const redirectUrl = new URL('/', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  if (token) {
    console.log('verified');
  }

  if (!token.tagName) {
    const redirectUrl = new URL('/set-tagname', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // 세션이 있으면 요청을 계속 진행
  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/profile/:path*'], // 세션을 확인할 경로 설정
};
