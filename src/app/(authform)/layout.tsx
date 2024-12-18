import Logo from '@/public/logo.png';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-md">
          <div className="flex justify-center">
            <img src={Logo.src} alt="Deverium logo" className="w-16 h-16 " />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
