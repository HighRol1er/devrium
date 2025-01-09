import SetTagNamePage from '@/components/set-tagname/SetTagNamePage';

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;

  return <SetTagNamePage userId={userId} />;
}
