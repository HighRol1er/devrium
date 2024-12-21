import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateUser } from '@/app/lib/hooks';

const prisma = new PrismaClient();

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { tagName } = await req.json();

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
// export async function PATCH(request: Request) {
//   try {
//     const session = await validateUser();

//     if (!session?.user) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     const { tagName } = await request.json();
//     const userId = session.user.id;

//     if (!tagName || typeof tagName !== 'string') {
//       return NextResponse.json({ error: 'Invalid tagName' }, { status: 400 });
//     }

//     // tagName이 이미 존재하는지 확인
//     const existingTagName = await prisma.user.findUnique({
//       where: { tagName },
//     });

//     if (existingTagName) {
//       return NextResponse.json(
//         { error: 'tagName already in use' },
//         { status: 409 }
//       );
//     }

//     // 유저의 tagName 업데이트
//     const updatedUser = await prisma.user.update({
//       where: { id: userId },
//       data: { tagName },
//     });

//     return NextResponse.json(updatedUser);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }
