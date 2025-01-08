import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Get comments by user ID
 * Endpoint: GET /api/user/[userId]/comments
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  try {
    // 유저가 작성한 댓글 조회
    const comments = await prisma.comment.findMany({
      where: {
        userId, // 작성한 유저의 ID로 필터링
      },
      include: {
        post: {
          // 댓글이 달린 게시글 정보도 포함시킬 수 있습니다.
          select: {
            id: true,
            title: true,
            content: true,
          },
        },
      },
    });

    if (comments.length === 0) {
      return NextResponse.json(
        { message: 'No comments found for this user' },
        { status: 404 }
      );
    }

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error('Error retrieving comments:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve comments' },
      { status: 500 }
    );
  }
}
