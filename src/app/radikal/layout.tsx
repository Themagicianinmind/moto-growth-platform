import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Radikal Motosport — Powersports Gatineau · Fox Racing · Harley-Davidson',
  description: 'Pièces, vêtements et service powersports à Gatineau. Concessionnaire Fox Racing. Partenaire exclusif pour les Harley-Davidson de flotte policière. 819-561-6686.',
  keywords: 'powersports Gatineau, Fox Racing Gatineau, Harley-Davidson, VTT, motocross, Radikal Motosport',
  openGraph: {
    title: 'Radikal Motosport — L\'autorité powersports de Gatineau',
    description: 'Pièces, vêtements et service powersports. Fox Racing. Police Harley.',
    type: 'website',
    locale: 'fr_CA',
  },
};

export default function RadikalLayout({ children }: { children: React.ReactNode }) {
  return <div className={cormorant.variable}>{children}</div>;
}
