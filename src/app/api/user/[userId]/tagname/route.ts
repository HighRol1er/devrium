import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Update user tagName
 * Endpoint: PATCH /api/user/[userId]/tagname
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  const { tagName } = await req.json(); // tagName 받아오기

  try {
    // 유저 tagName 업데이트
    const updatedUser = await prisma.user.update({
      where: {
        id: userId, // 유저 ID로 찾기
      },
      data: {
        tagName, // 태그 이름 업데이트
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error updating user tagName:', error);
    return NextResponse.json(
      { error: 'Failed to update user tagName' },
      { status: 500 }
    );
  }
}
