import { getProfile } from '@/services/profile/getMyProfile';
import { PROFILE } from '@/services/profile/queries/useGetMyProfile';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ProfilePage from './ProfilePage';

export default async function Page({ params }: { params: { userId: string } }) {
  const { userId } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [PROFILE, userId],
    queryFn: () => getProfile(userId),
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilePage userId={userId} />
    </HydrationBoundary>
  );
}
