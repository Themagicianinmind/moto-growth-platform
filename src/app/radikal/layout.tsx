import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const BASE_URL = 'https://moto-growth-platform.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Radikal Motosport — Powersports Gatineau · Fox Racing · Harley-Davidson',
    template: '%s · Radikal Motosport',
  },
  description: 'Pièces, vêtements et service powersports à Gatineau. Concessionnaire Fox Racing. Partenaire exclusif pour les Harley-Davidson de flotte policière. 819-561-6686.',
  keywords: 'powersports Gatineau, Fox Racing Gatineau, Harley-Davidson, VTT, motocross, Radikal Motosport, réparation moto Gatineau',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: `${BASE_URL}/radikal`,
    languages: {
      'fr-CA': `${BASE_URL}/radikal`,
      'en-CA': `${BASE_URL}/radikal`,
    },
  },
  openGraph: {
    title: "Radikal Motosport — L'autorité powersports de Gatineau",
    description: 'Réparation powersports, Fox Racing officiel, partenaire Police Harley-Davidson. Motos, VTT, motocross, motoneige, marine — Gatineau.',
    type: 'website',
    locale: 'fr_CA',
    url: `${BASE_URL}/radikal`,
    siteName: 'Radikal Motosport',
    images: [
      {
        url: `${BASE_URL}/radikal/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Radikal Motosport — Powersports Gatineau · Fox Racing · Police Harley-Davidson',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Radikal Motosport — L'autorité powersports de Gatineau",
    description: 'Fox Racing officiel, Police Harley, powersports Gatineau.',
    images: [`${BASE_URL}/radikal/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MotorcycleRepair',
  name: 'Radikal Motosport',
  description: 'R\u00e9paration et pi\u00e8ces powersports \u00e0 Gatineau. Concessionnaire Fox Racing. Partenaire exclusif Harley-Davidson flotte polici\u00e8re.',
  telephone: '+18195616686',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '156 De Varennes',
    addressLocality: 'Gatineau',
    addressRegion: 'QC',
    postalCode: 'J8T 8G4',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.4707,
    longitude: -75.7272,
  },
  url: 'https://moto-growth-platform.vercel.app/radikal',
  sameAs: ['https://radikalmotosport.com'],
  priceRange: '$$',
  openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-14:00'],
  hasMap: 'https://maps.google.com/?q=156+De+Varennes+Gatineau+QC+J8T+8G4',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 45.4707, longitude: -75.7272 },
    geoRadius: '75000',
  },
};

export default function RadikalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cormorant.variable}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
