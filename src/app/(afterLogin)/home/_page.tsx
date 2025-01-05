import { useGetAllPost } from '@/services/home/queries/useGetAllPost';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { POSTS } from '@/services/home/queries/useGetAllPost';

export default async function Page() {
  const queryClient = new QueryClient();

  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: [POSTS],
  // });
}
