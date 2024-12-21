import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
/* Change user name */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { newName } = await req.json();

  try {
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: newName,
      },
    });

    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    console.error('Error update user');
    return NextResponse.json(
      {
        error: 'Error update user',
      },
      { status: 500 }
    );
  }
}
