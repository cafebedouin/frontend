import './globals.css';
import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { AppProviders } from '@/components/providers';
import { PlusJakarta } from '@/font';

export const metadata: Metadata = {
  title: 'Auction Coin',
  description: 'Auction Coin',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={PlusJakarta.className}>
        <AppProviders>
          <Header />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
