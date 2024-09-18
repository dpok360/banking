import type { Metadata } from 'next';
import './globals.css';
import { Inter, IBM_Plex_Serif } from 'next/font/google';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});

export const metadata: Metadata = {
  title: 'Horizon',
  description: 'Horizon is a modern banking platform for everyone.',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
