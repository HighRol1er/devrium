import { IUser } from '@/types/user';
import { User } from 'lucide-react';

interface UserCardProps {
  data: IUser;
}
// NOTE:follow 기능 넣기

export default function UserCard({ data }: UserCardProps) {
  const score = data._count.comments + data._count.posts;
  return (
    <>
      <div className="flex items-center gap-2 rounded-md border border-solid bg-muted/60 p-4 shadow-md">
        {data.image == null ? (
          <User className="size-14 rounded-full" />
        ) : (
          <img
            src={data.image ?? ''}
            alt="profile"
            className="size-14 rounded-full"
          />
        )}

        <div className="flex flex-col">
          <span className="font-semibold">{data.name}</span>
          <span className="text-sm text-gray-500">@{data.tagName}</span>
          <span className="text-sm">{score}</span>
        </div>
      </div>
    </>
  );
}
