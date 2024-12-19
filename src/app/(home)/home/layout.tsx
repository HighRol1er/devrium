import LeftSidebar from './components/LeftSidebar';
import Navbar from '@/app/components/Navbar';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <LeftSidebar />
      </div>
    </>
  );
}
