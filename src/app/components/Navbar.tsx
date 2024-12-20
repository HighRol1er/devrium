import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

import { AuthModal } from './AuthModal';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from './ThemeToggle';
import { auth } from '../lib/auth';
import Avatar from './Avatar';
import { Search } from 'lucide-react';

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="mx-auto flex h-14 max-w-full items-center justify-between border-b bg-muted/40 px-4 py-5 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" className="size-10" />
        <h4 className="text-2xl font-semibold">
          <span className="text-primary">Dev'</span>rium
        </h4>
      </Link>
      <div className="relative flex">
        <Input placeholder="Search" className="pl-10" />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
      </div>
      <div className="flex gap-2">
        {session ? (
          <Avatar imageUrl={session?.user?.image as string} />
        ) : (
          <AuthModal />
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}
