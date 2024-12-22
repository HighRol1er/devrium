import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Update a comment
 * Endpoint: PUT /api/comment/[commentId]
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: { commentId: string } }
) {
  const { commentId } = params;
  const { content } = await req.json();

  try {
    // 댓글 수정
    const updatedComment = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        content,
      },
    });

    return NextResponse.json(updatedComment, { status: 200 });
  } catch (error) {
    console.error('Error updating comment:', error);
    return NextResponse.json(
      { error: 'Failed to update comment' },
      { status: 500 }
    );
  }
}

/** Delete a comment
 * Endpoint: DELETE /api/comment/[commentId]
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { commentId: string } }
) {
  const { commentId } = params;

  try {
    // 댓글 삭제
    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });

    return NextResponse.json(
      { message: 'Comment deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting comment:', error);
    return NextResponse.json(
      { error: 'Failed to delete comment' },
      { status: 500 }
    );
  }
}
