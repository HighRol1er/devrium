import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Get post stats (comments count and likes count)
 * Endpoint: GET /api/post/[postId]/stats
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  console.log(postId);

  try {
    // 게시물의 댓글 수와 좋아요 수 조회
    const postStats = await prisma.post.findUnique({
      where: {
        id: parseInt(postId), // postId는 정수여야 함
      },
      select: {
        _count: {
          select: {
            comments: true, // 댓글 수
            likes: true, // 좋아요 수
          },
        },
      },
    });

    if (!postStats) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        commentsCount: postStats._count.comments,
        likesCount: postStats._count.likes,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving post stats:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve post stats' },
      { status: 500 }
    );
  }
}
