'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-gray-900 to-purple-800 text-white">
        <div className="px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Share your thinking.
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Devrium is the worldwide DEV SNS platform <br />
            connect with Dev's around the world
          </p>
          <div>
            <Button className="rounded-full bg-purple-600 px-6 py-5 font-semibold text-white hover:bg-purple-700">
              <Link href="/home">Get home</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
