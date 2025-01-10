import { getProfile } from '@/services/profile/getProfile';
import { PROFILE } from '@/services/profile/queries/useGetProfile';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ProfilePage from '@/components/profile/ProfilePage';

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [PROFILE, userId],
    queryFn: () => getProfile(userId),
  });

  // const cachedData = queryClient.getQueryData([PROFILE, userId]);
  // console.log('SSR Fetched Data:', cachedData);

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilePage userId={userId} />
    </HydrationBoundary>
  );
}

// prefetching한 데이터를 넘겨주는 작업이 어디서 일어나는걸가?
// queryclient에서 일어나는거 같긴한데 공식문서 좀 읽어보자.
// NOTE: GPT의 설명 링크 https://chatgpt.com/share/677a7460-9064-8000-9546-b401dbd4ef45
// 가은님 멘토링 시간에 여쭤봐야지.
// 설명이 맞다면 velog에 정리할 것
