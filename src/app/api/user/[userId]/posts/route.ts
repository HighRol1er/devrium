import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Get posts by user ID
 * Endpoint: GET /api/user/[userId]/posts
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    // 유저가 작성한 게시글 조회
    const posts = await prisma.post.findMany({
      where: {
        userId, // 작성한 유저의 ID로 필터링
      },
      include: {
        category: {
          // 게시글이 속한 카테고리 정보도 포함시킬 수 있습니다.
          select: {
            id: true,
            name: true, // 카테고리 이름 등
          },
        },
      },
    });

    if (posts.length === 0) {
      return NextResponse.json(
        { message: 'No posts found for this user' },
        { status: 404 }
      );
    }

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error retrieving posts:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve posts' },
      { status: 500 }
    );
  }
}
