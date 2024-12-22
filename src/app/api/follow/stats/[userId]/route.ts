import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Get follower count and following count
 * Endpoint: api/follow/stats/[userId]
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    // 팔로워 수 조회
    const followerCount = await prisma.follow.count({
      where: {
        followingId: userId, // 팔로우된 사용자
      },
    });

    // 팔로잉 수 조회
    const followingCount = await prisma.follow.count({
      where: {
        followedById: userId, // 팔로우하는 사용자
      },
    });

    return NextResponse.json(
      { followerCount, followingCount },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching follow stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch follow stats' },
      { status: 500 }
    );
  }
}
