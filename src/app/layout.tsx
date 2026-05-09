import { Metadata } from 'next';
import React, { Suspense } from 'react';
import '@/config/configAxios';

import 'public/styles/globals.css';

import Layout from '@/components/Layout';
import MuiThemeProvider from '@/components/MuiThemeProvider';

import ReduxProvider from '@/store/provider';

import Loading from '@/app/loading';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  robots: { index: true, follow: true },
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    type: 'website',
    locale: 'en_US',
  },
  authors: [
    {
      name: 'EBCOM',
      url: 'https://ebcom.ir/',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body dir='rtl'>
        <ReduxProvider>
          <Suspense fallback={<Loading />}>
            <MuiThemeProvider>
              <Layout>{children}</Layout>
            </MuiThemeProvider>
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
