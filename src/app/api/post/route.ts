import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const createPostSchema = z.object({
  title: z.string().nonempty('title required'),
  content: z.string().nonempty('content required'),
  userId: z.string().nonempty('userId required'),
});
type createPostDto = z.infer<typeof createPostSchema>;

// 포스트 생성
export async function POST(request: NextRequest) {
  /**
   * request는 유저가 보낸 데이터 
   * {
      "title": "My First Post",
      "content": "This is the content of the first post.",
      "userId": "test"
     }
      이걸 구조분해 함 
      그래서 createPost의 데이터로 넣음 

   */
  const { title, content, userId }: createPostDto = await request.json();

  try {
    const createPost = await prisma.post.create({
      data: {
        title,
        content,
        userId, //User의 id를 참고 !! ! !
      },
    });
    return NextResponse.json(createPost, { status: 200 });
  } catch (error) {
    console.error('Error create post', error);
    return NextResponse.json(
      {
        error: 'Failed to create post',
      },
      { status: 500 }
    );
  }
}

// 전체 포스트 조회
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        User: true,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error get posts');
    return NextResponse.json(
      {
        error: 'Failed to get posts',
      },
      { status: 500 }
    );
  }
}
