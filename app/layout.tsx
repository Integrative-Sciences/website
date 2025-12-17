import type { Metadata } from 'next';
import './globals.css';
import '../src/App.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Integrative Science Journal',
  description: 'Advancing Interdisciplinary Research',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
