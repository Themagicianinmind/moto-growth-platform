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
