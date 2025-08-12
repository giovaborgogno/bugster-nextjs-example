import { VercelToolbar } from '@vercel/toolbar/next';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import './globals.css';
import { FreeDelivery } from '@/app/free-delivery';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Shirt Shop Example',
  description: 'A shirt shop example for Ecommerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showFreeDeliveryBanner = true;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const stored = localStorage.getItem('theme');
              const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = stored ? stored === 'dark' : prefersDark;
              if (isDark) document.documentElement.classList.add('dark');
            } catch {}
          `}
        </Script>
      </head>
      <body className="antialiased">
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <FreeDelivery show={showFreeDeliveryBanner} />
          <Navigation />
          {children}
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <VercelToolbar />
      </body>
    </html>
  );
}
