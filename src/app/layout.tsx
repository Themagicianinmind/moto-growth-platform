import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
});

const BASE_URL = 'https://moto-growth-platform.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Dynamik & Radikal — Moto Gatineau',
    template: '%s',
  },
  description: 'Réparation, pièces, vêtements et préparation aux examens moto à Gatineau. Dynamik Performance et Radikal Motosport.',
  keywords: 'moto Gatineau, réparation moto, Vespa, Harley-Davidson, Fox Racing, examen moto SAAQ',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Dynamik & Radikal — Moto Gatineau',
    description: 'Votre destination moto à Gatineau. Réparation, pièces, boutique et examen.',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Moto Gatineau',
    images: [
      {
        url: `${BASE_URL}/dynamik/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Dynamik Performance & Radikal Motosport — Moto Gatineau',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamik & Radikal — Moto Gatineau',
    description: 'Réparation, pièces, boutique et examen moto à Gatineau.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${dmSans.variable}`}
        style={{
          fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
          background: '#0f0f1a',
          color: '#e8e8f0',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
        }}
      >
        {children}
      </body>
    </html>
  );
}
