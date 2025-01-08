import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postCategory: string }>;
}): Promise<Metadata> {
  const postCategory = (await params).postCategory;

  const title = `Devrium | ${postCategory}`;
  const description = 'Developers SNS platform';
  return {
    title,
    description,
  };
}

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
