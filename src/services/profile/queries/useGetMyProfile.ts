import { IUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../getMyProfile';

export const PROFILE = 'profile';

export const useGetProfile = (userId: string) => {
  // throw new Error('Prefetching failed');
  return useQuery<IUser>({
    queryKey: [PROFILE, userId],
    queryFn: () => getProfile(userId),
  });
};
