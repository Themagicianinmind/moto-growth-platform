import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { radikalWinterStorage } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: radikalWinterStorage.meta.titleFr,
  description: radikalWinterStorage.meta.descriptionFr,
  openGraph: {
    title: radikalWinterStorage.meta.titleFr,
    description: radikalWinterStorage.meta.descriptionFr,
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

export default function RadikalWinterStoragePage() {
  return <ServicePage data={radikalWinterStorage} />;
}
