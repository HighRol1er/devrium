import { IUser } from '@/types/user';
import { PenLine } from 'lucide-react';
import ButtonGroup from './ButtonGroup';

interface MyInfo {
  myInfo: IUser;
}

export default async function ProfileCard({ myInfo }: MyInfo) {
  return (
    <>
      <div className="mb-6 flex items-center gap-4">
        <img
          src={myInfo.image as string}
          alt="profile image"
          className="w-16 rounded-full"
        />
        <div>
          <h1 className="flex items-center text-2xl font-bold">
            {myInfo.name}
            <PenLine className="ml-4 mt-2 size-5 hover:text-red-400" />
          </h1>
          <p className="text-sm">@{myInfo.tagName}</p>
        </div>
      </div>
      <div className="ml-4 flex gap-2 text-sm font-semibold opacity-50">
        <div>Follwers {myInfo.follower.length}</div>
        <div>Follwing {myInfo.following.length}</div>
      </div>
      <div className="mb-6 rounded-lg border-b p-4">
        <h2 className="mb-4 text-xl font-semibold">Overview</h2>
        <div className="flex gap-4">
          <ButtonGroup userId={myInfo.id} />
        </div>
      </div>
    </>
  );
}
