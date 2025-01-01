'use client';

import SearchBar from '@/components/common/SearchBar';
import UserCard from '@/components/topUsers/UserCard';
import { useGetAllUsers } from '@/services/topUsers/queries/useGetAllUsers';
import { IUser } from '@/types/user';
/**
 * pagenation 구현
 * 한 페이지에 20개 씩
 */
export default function TopUsers() {
  const { data, isLoading } = useGetAllUsers();

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="m-4">
        <div className="mb-4 w-[200px]">
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map((user: IUser) => <UserCard key={user.id} data={user} />)}
        </div>
      </div>
    </>
  );
}
