import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import { Button } from '@/components/ui/button';
import { AuthModal } from './AuthModal';

export default function Navbar() {
  return (
    <div className="mx-auto flex h-14 max-w-full items-center justify-between border-b bg-muted/40 px-4 py-5 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" className="size-10" />
        <h4 className="text-2xl font-semibold">
          <span className="text-primary">Dev'</span>rium
        </h4>
      </Link>
      <div> search bar</div>
      <AuthModal />
    </div>
  );
}

{
  /* <div className="mx-auto flex max-w-screen-2xl items-center justify-between py-2">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Deverium logo" className="size-12" />
        <h4 className="text-3xl font-semibold">
          <span className="text-primary">Devrium</span>
        </h4>
      </Link>
      <div>
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      </div>
    </div> */
}
