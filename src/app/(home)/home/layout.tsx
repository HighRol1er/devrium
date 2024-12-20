import LeftSidebar from './components/LeftSidebar';
import Navbar from '@/app/components/Navbar';
import RightSidebar from './components/RightSidebar';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {/* <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"> */}
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr_220px] lg:grid-cols-[280px_1fr_280px]">
        <LeftSidebar />
        <main>{children}</main>
        <RightSidebar />
      </div>
    </>
  );
}
