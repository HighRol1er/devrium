import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { UpdateUserReqest } from '../../type';

const prisma = new PrismaClient();

/* Change user name 
  End point : /api/user/profile/[tagName]
*/
export async function PATCH(
  req: NextRequest,
  { params }: { params: { tagName: string } }
) {
  const { tagName } = params;

  const { newName }: { newName: string } = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { tagName },
      data: { name: newName },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error updating user', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}
