import { IUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../getMyProfile';
import { commonQueryOptions } from '@/utils/tanstack-query/commonQueryOptions';

export const useGetProfile = (userId: string) => {
  return useQuery<IUser>({
    queryKey: ['profile', userId],
    queryFn: () => getProfile(userId),
    ...commonQueryOptions,
  });
};
