import Image from 'next/image';
import JsLogo from '@/public/js-logo.webp';
import TsLogo from '@/public/ts-logo.webp';
import NextLogo from '@/public/next-logo.svg';

export default async function ProfileSidebar() {
  // const session = await validateUser();
  return (
    <div className="bg-gr hidden h-1/3 w-80 rounded-lg bg-muted/40 bg-gradient-to-b from-muted p-6 shadow-lg md:block">
      <div className="rounded-lg">
        <h2 className="text-2xl font-bold">HighRollerJoe</h2>
      </div>
      <div className="mt-4">
        <div className="mb-4 grid-rows-2 text-sm">
          <p>1 Post</p>
          <p>0 Comment</p>
          <p>Dec 31, 2023 - Cake day</p>
          <p>My team</p>
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
          <h3 className="mb-2 text-lg font-bold">SETTINGS</h3>
          <div className="space-y-2">
            <button className="flex w-full items-center gap-2 text-left text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-xs font-bold">
                P
              </span>
              Profile - Customize your profile
            </button>
            <button className="flex w-full items-center gap-2 text-left text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold">
                A
              </span>
              Avatar - Customize and style
            </button>
            <button className="flex w-full items-center gap-2 text-left text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold">
                M
              </span>
              Moderation - Moderation Tools
            </button>
          </div>
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
