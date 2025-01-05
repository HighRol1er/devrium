import Logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

import { validateUser } from '@/lib/authSession';
import AuthModal from './AuthModal';
import Avatar from './Avatar';
import SearchBar from './SearchBar';
import { ThemeToggle } from './ThemeToggle';

export default async function Navbar() {
  const session = await validateUser();
  console.log(session);
  console.log(session?.user.image);

  if (!session) {
    return <div>error</div>;
  }

  return (
    <div className="mx-auto flex h-14 max-w-full items-center justify-between border-b bg-muted/40 px-4 py-5 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" className="size-10" />
        <h4 className="text-2xl font-semibold">
          <span className="text-primary">Dev'</span>rium
        </h4>
      </Link>
      <SearchBar />
      <div className="flex gap-2">
        {session ? (
          <Avatar image={session?.user.image} id={session.user.id} />
        ) : (
          <AuthModal />
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}
