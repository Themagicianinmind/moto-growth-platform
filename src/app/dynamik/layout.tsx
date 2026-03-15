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
    default: 'Dynamik Performance — Réparation moto Gatineau depuis 1999',
    template: '%s · Dynamik Performance',
  },
  description: 'Réparation moto experte, vente Vespa/Piaggio, entretien et entreposage hivernal à Gatineau. Concessionnaire Piaggio depuis 1999. Appelez le 819-772-9444.',
  keywords: 'réparation moto Gatineau, Vespa Gatineau, Piaggio, Dynamik Performance, mécanique moto, entretien moto',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: `${BASE_URL}/dynamik`,
    languages: {
      'fr-CA': `${BASE_URL}/dynamik`,
      'en-CA': `${BASE_URL}/dynamik`,
    },
  },
  openGraph: {
    title: 'Dynamik Performance — Expert moto depuis 1999',
    description: 'Réparation moto experte, vente Vespa & Piaggio, entretien et entreposage hivernal à Gatineau. Concessionnaire officiel Outaouais.',
    type: 'website',
    locale: 'fr_CA',
    url: `${BASE_URL}/dynamik`,
    siteName: 'Dynamik Performance',
    images: [
      {
        url: `${BASE_URL}/dynamik/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Dynamik Performance — Réparation moto experte depuis 1999 à Gatineau',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamik Performance — Expert moto depuis 1999',
    description: 'Réparation moto experte, vente Vespa & Piaggio à Gatineau.',
    images: [`${BASE_URL}/dynamik/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MotorcycleDealer',
  name: 'Dynamik Performance',
  description: 'Réparation moto experte et concessionnaire Vespa/Piaggio depuis 1999 à Gatineau',
  telephone: '+18197729444',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '144 Ch. Freeman',
    addressLocality: 'Gatineau',
    addressRegion: 'QC',
    postalCode: 'J8Z 2B4',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.4477,
    longitude: -75.7484,
  },
  url: 'https://moto-growth-platform.vercel.app/dynamik',
  sameAs: ['https://dynamikperformance.com'],
  priceRange: '$$',
  openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-14:00'],
  hasMap: 'https://maps.google.com/?q=144+Ch+Freeman+Gatineau+QC+J8Z+2B4',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 45.4477, longitude: -75.7484 },
    geoRadius: '50000',
  },
};

export default function DynamikLayout({ children }: { children: React.ReactNode }) {
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
