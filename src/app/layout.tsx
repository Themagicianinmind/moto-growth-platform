import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Dynamik & Radikal — Moto Gatineau',
  description: 'Réparation, pièces, vêtements et préparation aux examens moto à Gatineau. Dynamik Performance et Radikal Motosport.',
  keywords: 'moto Gatineau, réparation moto, Vespa, Harley-Davidson, Fox Racing, examen moto SAAQ',
  openGraph: {
    title: 'Dynamik & Radikal — Moto Gatineau',
    description: 'Votre destination moto à Gatineau. Réparation, pièces, boutique et examen.',
    type: 'website',
    locale: 'fr_CA',
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
