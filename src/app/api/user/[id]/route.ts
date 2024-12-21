import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { UpdateUserReqest } from '../type';
import { auth } from '@/app/lib/auth';

const prisma = new PrismaClient();

/* Change user name */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  //localhost:3000/api/user/tagName
  const { name } = params;
  const { newName }: UpdateUserReqest = await req.json();

  try {
    const session = await auth();
    const userId = session?.user?.id;

    // if (!userId) {
    //   return NextResponse.json(
    //     {
    //       error: 'User not authenticated',
    //     },
    //     {
    //       status: 400,
    //     }
    //   );
    // }
    // const getUser = await prisma.user.findUnique({
    //   where: {
    //     id : tagename
    //   }
    // })
    // userID === getUser
    // else throw new error

    const updateUser = await prisma.user.update({
      where: {
        id: userId,
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
        error: 'Failed update user',
      },
      { status: 500 }
    );
  }
}
