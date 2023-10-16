import './globals.css';
import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { AppProviders } from '@/components/providers';
import { Qiucksand } from '@/font';

export const metadata: Metadata = {
  title: 'Auction Coin',
  description: 'Auction Coin',
  icons: ['/logo.svg'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={Qiucksand.className}>
        <AppProviders>
          <Header />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
