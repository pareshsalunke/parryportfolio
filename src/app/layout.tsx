import type {Metadata} from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import {Analytics} from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Paresh Salunke — Product Manager',
  description:
    'Software Engineer turned Product Manager. Building products at the intersection of technology and user needs.',
  openGraph: {
    title: 'Paresh Salunke - Product Manager',
    description:
      'Software Engineer turned Product Manager. Building products at the intersection of technology and user needs.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.classList.toggle('light',t!=='dark');})();`,
          }}
        />
      </head>
      <body className="bg-amber-50 text-stone-900 dark:bg-slate-900 dark:text-white antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
