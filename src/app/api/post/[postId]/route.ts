import { auth } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { UpdatePostRequestDto } from '../type';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;
  const id = Number(postId);

  try {
    const getPost = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        comments: {
          include: {
            user: true,
          },
        },
        _count: {
          select: {
            comments: true, // 댓글 수
            likes: true, // 좋아요 수
          },
        },
      },
    });

    if (!getPost) {
      return NextResponse.json(
        {
          error: 'Post not found',
        },
        { status: 404 }
      );
    }
    return NextResponse.json(getPost, { status: 200 });
  } catch (error) {
    console.error(error, 'Error get post');
    return NextResponse.json({ error: 'Failed get Post ' }, { status: 500 });
  }
}

/** Update post
 * End point : api/post/[postId]
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;
  console.log(postId, typeof postId);
  const { updateTitle, updateContent, updateCategoryId }: UpdatePostRequestDto =
    await req.json();

  console.log(updateTitle, updateContent, updateCategoryId);
  const id = Number(postId);
  try {
    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title: updateTitle,
        content: updateContent,
        categoryId: updateCategoryId,
      },
    });
    return NextResponse.json(updatePost, { status: 200 });
  } catch (error) {
    console.error(error, 'Error update post');
    return NextResponse.json(
      {
        error: 'Failed updata post',
      },
      {
        status: 500,
      }
    );
  }
}

/** Delete post
 * End point : api/post/[postId]
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;

  const id = Number(postId);

  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id,
      },
    });

    if (!deletedPost) {
      return NextResponse.json(
        {
          error: 'Post not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `Post has been deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error(error, 'Error deleting post');
    return NextResponse.json(
      {
        error: 'Failed to delete post',
      },
      { status: 500 }
    );
  }
}
