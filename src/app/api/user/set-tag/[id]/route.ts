import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* Set user tag name 
  End point : api/user/set-tag/[id]
*/
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log('userId >>>', id);
  const { tagName } = await req.json();
  console.log('tagName >>>', tagName);

  try {
    // const session = await validateUser();
    // console.log(tagName, session);
    // const id = session?.user?.id;

    const setTagName = await prisma.user.update({
      where: {
        id,
      },
      data: {
        tagName: tagName,
      },
    });
    return NextResponse.json(setTagName, { status: 200 });
  } catch (error) {
    console.error(error, 'Error set tag name');
    return NextResponse.json(
      {
        error: 'Failed to set tag name',
      },
      {
        status: 500,
      }
    );
  }
}
