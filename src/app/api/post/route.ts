// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { z } from 'zod';

// const prisma = new PrismaClient();
// /**
//  * User {
//   id
//   userName
//   email
//   emailVerified
//   image
//   accounts
//   sessions
//   posts
//   createdAt
//   updatedAt
//  * }
//  */
// const createPostSchema = z.object({
//   title: z.string().nonempty('title required'),
//   content: z.string().nonempty('content required'),
//   userId: z.string().nonempty('userId required'),
// });
// type createPostDto = z.infer<typeof createPostSchema>;

// export async function POST(request: NextRequest) {
//   const {userId, title, content}: createPostDto = await request.json();
//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: userId },
//     });

//     const createPost = await prisma.post.create({
//       data: {
//         title,
//         content,
//         userId: {
//           connect: { id: userId }, // userId로 관계 연결
//         },
//       },
//     });

//     return NextResponse.json(createPost, { status: 201 });
//   } catch (error) {
//     console.error('Error create post', error);
//     return NextResponse.json(
//       {
//         error: 'Failed to create post',
//       },
//       { status: 500 }
//     );
//   }
// }
