import Logo from '@/public/logo.png';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-gray-900 p-8 shadow-md">
          <div className="flex justify-center">
            <Image src={Logo.src} alt="Deverium logo" className="h-16 w-16" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
