import { IUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../getAllUsers';
import { commonQueryOptions } from '@/utils/tanstack-query/commonQueryOptions';

export const useGetAllUsers = () => {
  return useQuery<IUser[]>({
    queryKey: ['allUsers'],
    queryFn: () => getAllUsers(),
    ...commonQueryOptions,
  });
};
