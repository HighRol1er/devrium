import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Toaster } from '@/components/ui/toaster';
import TanStackProvider from '@/providers/TanStackProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // 폰트 로딩 최적화 라는데?
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Devrium',
  description: 'Developer SNS Platform',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // seo 향상을 위해서 <main>를 써ㅝ야하나?
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <TanStackProvider>
              <Navbar />
              <main>{children}</main>
              <Toaster />
              <Footer />
            </TanStackProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
