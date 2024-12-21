import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateUser } from '@/app/lib/hooks';

const prisma = new PrismaClient();

/* Get all user data */
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error get users');
    return NextResponse.json(
      {
        error: 'Failed to get users',
      },
      {
        status: 500,
      }
    );
  }
}
