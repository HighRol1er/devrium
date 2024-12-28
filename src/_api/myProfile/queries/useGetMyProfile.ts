import { IUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../getMyProfile';

export const useGetMyProfile = (userId: string) => {
  return useQuery<IUser>({
    queryKey: ['profile', userId],
    queryFn: () => getMyProfile(userId),
  });
};
