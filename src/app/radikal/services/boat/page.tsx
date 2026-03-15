import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { radikalBoat } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: radikalBoat.meta.titleFr,
  description: radikalBoat.meta.descriptionFr,
  openGraph: {
    title: radikalBoat.meta.titleFr,
    description: radikalBoat.meta.descriptionFr,
    type: 'website',
    locale: 'fr_CA',
  },
  alternates: {
    languages: {
      'fr-CA': '#', // resolved by parent layout metadataBase
      'en-CA': '#',
    },
  },
};

export default function RadikalBoatPage() {
  return <ServicePage data={radikalBoat} />;
}
