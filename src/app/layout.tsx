import './globals.css';
import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { AppProviders } from '@/components/providers';
import { Qiucksand } from '@/font';

export const metadata: Metadata = {
  title: 'Auction Coin',
  description: 'Auction Coin',
  icons: ['/favicon/favicon-color.png'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={Qiucksand.className}>
        <AppProviders>
          <Header />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
