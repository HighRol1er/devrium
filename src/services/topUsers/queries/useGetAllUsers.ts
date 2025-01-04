import { IUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../getAllUsers';

export const useGetAllUsers = () => {
  return useQuery<IUser[]>({
    queryKey: ['allUsers'],
    queryFn: () => getAllUsers(),
  });
};
