import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { signIn } from '../lib/auth';
import { GitHubAuthButton, GoogleAuthButton } from './SubmitBtn';

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Log In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex flex-row items-center justify-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10" />
          <h4 className="text-3xl font-semibold">
            Dev'<span className="text-primary">rium</span>
          </h4>
        </DialogHeader>
        <div className="mt-5 flex flex-col gap-3">
          <form
            action={async () => {
              // inline server action
              'use server';
              await signIn('google');
            }}
            className="w-full"
          >
            <GoogleAuthButton />
          </form>
          <form
            action={async () => {
              'use server';
              await signIn('github');
            }}
          >
            <GitHubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
