import type {Metadata} from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import {Analytics} from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Paresh Salunke — Product Manager',
  description:
    'Software Engineer turned Product Manager. Building products at the intersection of technology and user needs.',
  openGraph: {
    title: 'Paresh Salunke — Product Manager',
    description:
      'Software Engineer turned Product Manager. Building products at the intersection of technology and user needs.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t!=='light');})();`,
          }}
        />
      </head>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
