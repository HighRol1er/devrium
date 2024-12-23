import Image from 'next/image';

export default async function ProfileSidebar() {
  // const session = await validateUser();
  return (
    <div className="bg-gr h-1/3 w-80 rounded-lg bg-muted/40 bg-gradient-to-b from-blue-800 p-6 shadow-lg">
      <div className="rounded-lg">
        <h2 className="text-2xl font-bold">HighRollerJoe</h2>
      </div>
      <div className="mt-4">
        <div className="mb-4 grid-rows-2 text-sm">
          <p>1 Post karma</p>
          <p>0 Comment karma</p>
          <p>Dec 31, 2023 - Cake day</p>
          <p>0 Gold earned</p>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-bold">ACHIEVEMENTS</h3>
          <div className="flex items-center gap-2">
            <Image
              src="/achievement1.png"
              alt="Achievement 1"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Image
              src="/achievement2.png"
              alt="Achievement 2"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Image
              src="/achievement3.png"
              alt="Achievement 3"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="mt-2 text-sm">
            Banana Beginner, Banana Baby, Newcomer, +2 more
          </p>
          <button className="mt-2 rounded-full bg-gray-700 px-4 py-1 text-sm">
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
          <button className="w-full rounded bg-gray-800 px-4 py-2 text-sm">
            + Add Social Link
          </button>
        </div>
      </div>
    </div>
  );
}
