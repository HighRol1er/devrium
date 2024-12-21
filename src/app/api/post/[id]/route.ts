import { auth } from '@/app/lib/auth';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { UpdatePostRequestDto } from '../type';

const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const { newTitle, newContent }: UpdatePostRequestDto = await req.json();

  try {
    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title: newTitle,
        content: newContent,
      },
    });
    return NextResponse.json(updatePost, { status: 200 });
  } catch (error) {
    console.error('Error update post');
    return NextResponse.json(
      {
        error: 'Failed updata post',
      },
      {
        status: 500,
      }
    );
  }
}
