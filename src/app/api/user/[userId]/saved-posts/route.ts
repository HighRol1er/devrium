import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Add a post to user's saved posts (bookmark)
 * Endpoint: POST /api/user/[userId]/saved-posts
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const { postId } = await req.json(); // 게시글 ID 받아오기

  try {
    // 게시글 북마크 추가
    const savedPost = await prisma.saved.create({
      data: {
        userId,
        postId,
      },
    });

    return NextResponse.json(savedPost, { status: 201 });
  } catch (error) {
    console.error('Error saving post:', error);
    return NextResponse.json({ error: 'Failed to save post' }, { status: 500 });
  }
}

/** Get all saved posts (bookmarked posts) by user
 * Endpoint: GET /api/user/[userId]/saved-posts
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    // 유저가 북마크한 게시글 조회
    const savedPosts = await prisma.saved.findMany({
      where: {
        userId,
      },
      include: {
        post: true, // 게시글 정보 포함
      },
    });

    return NextResponse.json(savedPosts, { status: 200 });
  } catch (error) {
    console.error('Error fetching saved posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch saved posts' },
      { status: 500 }
    );
  }
}
