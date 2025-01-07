import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { postCategory: string };
}): Promise<Metadata> {
  const title = `Devrium | ${params.postCategory}`;
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
