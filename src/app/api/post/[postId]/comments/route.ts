import { CommentRequestDto } from '@/types/comment';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { validateUser } from '@/lib/authSession';

const prisma = new PrismaClient();

// 애도 타입 이동 시키기

/** Add comment to a post
 * Endpoint: POST /api/post/[postId]/comments
 */
export async function POST(req: NextRequest) {
  const { content, postId }: CommentRequestDto = await req.json();
  const session = await validateUser();

  if (!session) {
    return NextResponse.json(
      { error: 'not available session' },
      { status: 400 }
    );
  }
  if (!session.user.id) {
    return NextResponse.json({ error: 'not available id' }, { status: 400 });
  }
  const userId = session.user.id;

  try {
    // 새로운 댓글을 게시글에 추가
    const newComment = await prisma.comment.create({
      data: {
        userId: userId,
        postId: Number(postId),
        content,
      },
    });

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}
