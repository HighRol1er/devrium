import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Like a post
 * Endpoint: POST /api/likepost/[postId]
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  const { userId } = await req.json(); // 사용자 ID 받아오기 (로그인한 사용자)

  try {
    // 이미 좋아요를 눌렀는지 확인
    const existingLike = await prisma.like.findFirst({
      where: {
        postId: Number(postId),
        userId: userId,
      },
    });

    if (existingLike) {
      return NextResponse.json(
        { error: 'User has already liked this post' },
        { status: 400 }
      );
    }

    // 좋아요 추가
    const newLike = await prisma.like.create({
      data: {
        postId: Number(postId),
        userId: userId,
      },
    });

    return NextResponse.json(newLike, { status: 201 });
  } catch (error) {
    console.error('Error liking post:', error);
    return NextResponse.json({ error: 'Failed to like post' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  const { userId } = await req.json(); // 사용자 ID 받아오기 (로그인한 사용자)

  try {
    // 좋아요 레코드 삭제
    const deletedLike = await prisma.like.deleteMany({
      where: {
        postId: Number(postId),
        userId: userId,
      },
    });

    if (deletedLike.count === 0) {
      return NextResponse.json(
        { error: 'Like not found or not previously liked' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Like removed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error unliking post:', error);
    return NextResponse.json(
      { error: 'Failed to remove like' },
      { status: 500 }
    );
  }
}
