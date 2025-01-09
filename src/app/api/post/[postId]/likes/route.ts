import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Get like count for a post
 * Endpoint: GET /api/post/[postId]/likes
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;

  try {
    // 특정 게시글에 달린 좋아요 수 조회
    const likeCount = await prisma.like.count({
      where: {
        postId: Number(postId), // postId가 일치하는 좋아요 수를 셈
      },
    });

    return NextResponse.json({ likeCount }, { status: 200 });
  } catch (error) {
    console.error('Error fetching like count:', error);
    return NextResponse.json(
      { error: 'Failed to fetch like count' },
      { status: 500 }
    );
  }
}
