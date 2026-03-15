import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dynamik Performance — Réparation moto Gatineau depuis 1999',
  description: 'Réparation moto experte, vente Vespa/Piaggio, entretien et entreposage hivernal à Gatineau. Concessionnaire Piaggio depuis 1999. Appelez le 819-772-9444.',
  keywords: 'réparation moto Gatineau, Vespa Gatineau, Piaggio, Dynamik Performance, mécanique moto',
  openGraph: {
    title: 'Dynamik Performance — Expert moto depuis 1999',
    description: 'Réparation, vente Vespa et entretien moto à Gatineau.',
    type: 'website',
    locale: 'fr_CA',
  },
};

export default function DynamikLayout({ children }: { children: React.ReactNode }) {
  return <div className={cormorant.variable}>{children}</div>;
}
