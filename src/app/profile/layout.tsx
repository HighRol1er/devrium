import LeftSidebar from '@/app/(home)/home/components/LeftSidebar';
import Navbar from '@/app/components/Navbar';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr_220px] lg:grid-cols-[280px_1fr_250px]">
        <LeftSidebar />
        <main>{children}</main>
      </div>
    </>
  );
}
