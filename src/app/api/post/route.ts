import { verifyUserSession } from '@/app/lib/hooks';
import { createPostRequest } from '@/app/utils/schema/postSchema';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();

/* Create Post  */
export async function POST(request: NextRequest) {
  const { title, content, categoryId }: createPostRequest =
    await request.json();
  try {
    const userId = await verifyUserSession();

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
        error: 'Failed create post',
      },
      { status: 500 }
    );
  }
}

/* Get all posts (Category X) */
export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error get posts');
    return NextResponse.json(
      {
        error: 'Failed get posts',
      },
      { status: 500 }
    );
  }
}
