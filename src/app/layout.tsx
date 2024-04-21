import { Metadata } from 'next';

import '@/styles/globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `CrewInventory | Crewfellows Limited |`,
  description: ``,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
