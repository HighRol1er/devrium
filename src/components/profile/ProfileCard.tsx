import { IUser } from '@/types/user';
import { PenLine, User } from 'lucide-react';
import ButtonGroup from './ButtonGroup';
import FollowButton from './FollowButton';

interface ProfileCardProps {
  data: IUser;
}

export default function ProfileCard({ data }: ProfileCardProps) {
  return (
    <>
      <div className="mb-6 flex items-center gap-4">
        {!data.image ? (
          <User />
        ) : (
          <img
            src={data.image}
            alt="profile image"
            className="w-16 rounded-full"
          />
        )}

        <div>
          <h1 className="flex items-center text-2xl font-bold">
            {data.name}
            <PenLine className="ml-4 mt-2 size-5 hover:text-red-400" />
          </h1>
          <p className="text-sm">@{data.tagName}</p>
        </div>
      </div>
      <div className="ml-4 flex items-center gap-2">
        <div className="flex gap-2 text-sm font-semibold opacity-50">
          <div>Follwers {data.follower.length}</div>
          <div>Follwing {data.following.length}</div>
        </div>
        <FollowButton userId={data.id} />
      </div>
      <div className="mb-6 rounded-lg border-b p-4">
        <h2 className="mb-4 text-xl font-semibold">Overview</h2>
        <div className="flex gap-4">
          <ButtonGroup userId={data.id} />
        </div>
      </div>
    </>
  );
}
