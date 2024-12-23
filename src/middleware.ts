// import { NextResponse } from 'next/server';
// import { auth, auth as getSession } from './app/lib/auth'; // 인증 처리 로직을 정의한 커스텀 모듈입니다.
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   // 사용자의 세션 정보를 가져옵니다
//   const session = await auth();

//   // 세션이 없으면 / 페이지로 리다이렉트
//   if (!session) {
//     const redirectUrl = new URL('/', req.url);
//     return NextResponse.redirect(redirectUrl);
//   }

//   if (!session.user.tagName) {
//     const redirectUrl = new URL('/set-tagname', req.url);
//     return NextResponse.redirect(redirectUrl);
//   }

//   // 세션이 있으면 요청을 계속 진행
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/home/:path*', '/profile/:path*'], // 세션을 확인할 경로 설정
// };

// 아 [auth][details]: {}
// [auth][error] SessionTokenError: Read more at https://errors.authjs.dev#sessiontokenerror
// [auth][cause]: Error: PrismaClient is not configured to run in Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware). In order to run Prisma Client on edge runtime, either:
// - Use Prisma Accelerate: https://pris.ly/d/accelerate
// - Use Driver Adapters: https://pris.ly/d/driver-adapters
// 미들웨어 설정은 나중에 하자 ㅋㅋ
