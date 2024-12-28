import { PenLine } from 'lucide-react';
import ButtonGroup from './ButtonGroup';
import { useProfileStore } from '@/store/profile/profileStore';

export default function ProfileCardProps() {
  const profile = useProfileStore((state) => state.profile);

  return (
    <>
      <div className="mb-6 flex items-center gap-4">
        <img
          src={profile.image ?? ''}
          alt="profile image"
          className="w-16 rounded-full"
        />
        <div>
          <h1 className="flex items-center text-2xl font-bold">
            {profile.name}
            <PenLine className="ml-4 mt-2 size-5 hover:text-red-400" />
          </h1>
          <p className="text-sm">@{profile.tagName}</p>
        </div>
      </div>
      <div className="ml-4 flex gap-2 text-sm font-semibold opacity-50">
        <div>Follwers {profile.follower}</div>
        <div>Follwing {profile.following}</div>
      </div>
      <div className="mb-6 rounded-lg border-b p-4">
        <h2 className="mb-4 text-xl font-semibold">Overview</h2>
        <div className="flex gap-4">
          <ButtonGroup userId={profile.userId} />
        </div>
      </div>
    </>
  );
}
