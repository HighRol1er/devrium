import LeftSidebar from '@/components/layout/LeftSidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devrium | profile',
  description: 'Developer SNS Platform',
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr_220px] lg:grid-cols-[280px_1fr_250px]">
        <LeftSidebar />
        <main>{children}</main>
      </div>
    </>
  );
}
