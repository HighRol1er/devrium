import Logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { validateUser } from '@/lib/authSession';
import AuthModal from './AuthModal';
import Avatar from './Avatar';
import SearchBar from './SearchBar';
import { ThemeToggle } from './ThemeToggle';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { LeftSidebarMenu } from '../layout/LeftSidebarMenu';

export default async function Navbar() {
  const session = await validateUser();

  return (
    <div className="mx-auto flex h-14 max-w-full items-center justify-between border-b bg-muted/40 px-4 py-5 sm:px-6 lg:px-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription></SheetDescription>
          <nav className="mt-10 grid gap-2">
            <LeftSidebarMenu />
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden md:block">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="logo" className="size-10" />
          <h4 className="text-2xl font-semibold">
            <span className="text-primary">Dev'</span>rium
          </h4>
        </Link>
      </div>
      <div className="hidden md:block">
        <SearchBar />
      </div>
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
