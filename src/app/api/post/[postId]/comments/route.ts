import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Add comment to a post
 * Endpoint: POST /api/post/[postId]/comments
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  const { userId, content } = await req.json();

  try {
    // 새로운 댓글을 게시글에 추가
    const newComment = await prisma.comment.create({
      data: {
        userId,
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
