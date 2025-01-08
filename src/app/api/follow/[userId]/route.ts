import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { validateUser } from '@/lib/authSession';

const prisma = new PrismaClient();

/** Follow user
 * Endpoint: api/follow/[userId]
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params; // 팔로우할 사용자 ID
  console.log(userId);

  const session = await validateUser();

  if (!session || !session.user?.id) {
    return NextResponse.json(
      { error: 'User is not authenticated or does not exist' },
      { status: 401 } // 인증 문제는 401
    );
  }
  const followerId = session.user.id;
  console.log(followerId);
  if (followerId === userId) {
    return NextResponse.json(
      { error: 'You cannot follow yourself' },
      { status: 400 }
    );
  }

  try {
    // 이미 팔로우하고 있으면, 중복을 방지
    const existingFollow = await prisma.follow.findUnique({
      where: {
        followingId_followedById: {
          // followingId: userId,
          // followedById: followerId,
          followingId: followerId,
          followedById: userId,
        },
      },
    });

    if (existingFollow) {
      return NextResponse.json(
        { error: 'You are already following this user' },
        { status: 400 }
      );
    }

    // 팔로우 관계 생성
    const newFollow = await prisma.follow.create({
      data: {
        // followingId: userId,
        // followedById: followerId,
        followingId: followerId,
        followedById: userId,
      },
    });

    return NextResponse.json(newFollow, { status: 201 });
  } catch (error) {
    console.error('Error following user:', error);
    return NextResponse.json(
      { error: 'Failed to follow user' },
      { status: 500 }
    );
  }
}

/** Unfollow user
 * Endpoint: api/follow/[userId]
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params; // 언팔로우할 사용자 ID
  // const { followerId } = await req.json(); // 팔로우 취소하는 사용자 ID
  const session = await validateUser();

  if (!session || !session.user?.id) {
    return NextResponse.json(
      { error: 'User is not authenticated or does not exist' },
      { status: 401 } // 인증 문제는 401
    );
  }
  const followerId = session.user.id;

  try {
    // 팔로우 관계가 존재하는지 확인
    const existingFollow = await prisma.follow.findUnique({
      where: {
        followingId_followedById: {
          // followingId: userId,
          // followedById: followerId,
          followingId: followerId,
          followedById: userId,
        },
      },
    });

    if (!existingFollow) {
      return NextResponse.json(
        { error: 'You are not following this user' },
        { status: 400 }
      );
    }

    // 팔로우 관계 삭제
    await prisma.follow.delete({
      where: {
        followingId_followedById: {
          // followingId: userId,
          // followedById: followerId,
          followingId: followerId,
          followedById: userId,
        },
      },
    });

    return NextResponse.json(
      { message: 'Unfollowed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error unfollowing user:', error);
    return NextResponse.json(
      { error: 'Failed to unfollow user' },
      { status: 500 }
    );
  }
}

/** Get following users
 * Endpoint: api/follow/[userId]
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params; // 팔로우한 사용자 ID

  try {
    // 팔로우한 사용자 목록 조회
    const following = await prisma.follow.findMany({
      where: {
        followedById: userId, // 팔로우한 사용자
      },
      select: {
        following: {
          select: {
            id: true,
            name: true,
            tagName: true,
            image: true,
          },
        },
      },
    });

    // 팔로우한 사용자가 없으면 빈 배열 반환
    if (following.length === 0) {
      return NextResponse.json(
        { message: 'No users followed' },
        { status: 200 }
      );
    }

    return NextResponse.json(following, { status: 200 });
  } catch (error) {
    console.error('Error fetching following users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch following users' },
      { status: 500 }
    );
  }
}
