import { auth } from '@/app/lib/auth';
import { createPostDto } from '@/app/utils/schema/postSchema';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();

// 포스트 생성
// 카테고리 추가해야함
export async function POST(request: NextRequest) {
  const { title, content, categoryId }: createPostDto = await request.json();
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json(
        {
          error: 'User not authenticated',
        },
        {
          status: 400,
        }
      );
    }

    const createPost = await prisma.post.create({
      data: {
        title,
        content,
        userId,
        categoryId,
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
    // const posts = await prisma.post.findMany({
    //   include: {
    //     user: true,
    //   },
    // });
    const posts = await prisma.post.findMany();
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
