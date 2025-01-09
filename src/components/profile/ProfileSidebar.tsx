import JsLogo from '@/assets/js-logo.webp';
import NextLogo from '@/assets/next-logo.svg';
import TsLogo from '@/assets/ts-logo.webp';
import { IUser } from '@/types/user';
import Image from 'next/image';

interface ProfileSidebarProps {
  data: IUser;
}

export default function ProfileSidebar({ data }: ProfileSidebarProps) {
  const formattedCreatedAt = new Date(data.createdAt)
    .toLocaleDateString('en-CA')
    .replace(/-/g, ' ');

  return (
    <div className="bg-gr hidden h-1/3 w-80 rounded-lg bg-muted/40 bg-gradient-to-b from-muted p-6 shadow-lg md:block">
      <div className="rounded-lg">
        <h2 className="text-2xl font-bold">HighRollerJoe</h2>
      </div>
      <div className="mt-4">
        <div className="mb-4 grid-rows-2 text-sm">
          <p>{data.posts.length} Post</p>
          <p>{data.comments.length} Comment</p>
          <p className="flex gap-2">
            <span className="font-semibold">Joined </span>
            {formattedCreatedAt}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-bold">ACHIEVEMENTS</h3>
          <div className="flex items-center gap-2">
            <Image
              src={JsLogo}
              alt="Achievement 1"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Image
              src={TsLogo}
              alt="Achievement 2"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Image
              src={NextLogo}
              alt="Achievement 3"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="mt-2 text-sm">
            Javascript Beginner, Tyscript Beginner, Next Connector, +2 more
          </p>
          <button className="mt-2 rounded-full bg-muted px-4 py-1 text-sm hover:bg-primary/40">
            View All
          </button>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 text-lg font-bold">LINKS</h3>
          <button className="w-full rounded px-4 py-2 text-sm hover:bg-primary/40">
            + Add Social Link
          </button>
        </div>
      </div>
    </div>
  );
}
