import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Get user's follow stats (followers count and following count)
 * Endpoint: GET /api/user/[userId]/follow-stats
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  try {
    // 유저의 팔로워 수와 팔로잉 수 조회
    const followStats = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        _count: {
          select: {
            follower: true, // 팔로워 수
            following: true, // 팔로잉 수
          },
        },
      },
    });

    if (!followStats) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        followersCount: followStats._count.follower,
        followingCount: followStats._count.following,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving user follow stats:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve user follow stats' },
      { status: 500 }
    );
  }
}
