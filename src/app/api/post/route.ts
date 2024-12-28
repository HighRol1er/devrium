import { auth } from '@/app/lib/auth';
// import { createPostRequest } from '@/app/utils/schema/postSchema';
import { createPostRequest } from '@/types/post';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();

/** Create Post
 * End point(POST) : api/post
 */
export async function POST(request: NextRequest) {
  const { title, content, categoryId }: createPostRequest =
    await request.json();
  try {
    if (!title || !content || !categoryId) {
      return NextResponse.json({ error: 'Fields required' }, { status: 400 });
    }
    const session = await auth();
    const userId = session?.user.id;

    const createPost = await prisma.post.create({
      data: {
        title,
        content,
        userId: userId as string,
        categoryId,
      },
    });

    return NextResponse.json(createPost, { status: 200 });
  } catch (error) {
    console.error('Error create post', error);
    return NextResponse.json({ error: 'Failed create post' }, { status: 500 });
  }
}

/** Get all posts (Category X)
 * End point(GET): api/post
 */
// export async function GET() {
//   try {
//     const posts = await prisma.post.findMany();

//     return NextResponse.json(posts, { status: 200 });
//   } catch (error) {
//     console.error('Error get posts');
//     return NextResponse.json({ error: 'Failed get posts' }, { status: 500 });
//   }
// }

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') ?? '3', 10);

  try {
    const posts = await prisma.post.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            tagName: true,
            image: true,
          },
        },
      },
    });

    if (!posts || posts.length === 0) {
      return NextResponse.json({ posts: [], totalCount: 0, currentPage: page });
    }

    const totalCount = await prisma.post.count();

    return NextResponse.json({
      posts,
      totalCount: Math.ceil(totalCount / pageSize),
      currentPage: page,
    });
  } catch (error) {
    console.error('Error fetching posts', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch posts',
      },
      { status: 500 }
    );
  }
}
