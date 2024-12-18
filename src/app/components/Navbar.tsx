import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <div className="flex py-2 items-center justify-between mx-auto max-w-screen-2xl">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Deverium logo" className="size-12 " />
        <h4 className="text-3xl font-semibold">
          <span className="text-primary">Devrium</span>
        </h4>
      </Link>
      <div>
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      </div>
    </div>
  );
}
