import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { dynamikWinterStorage } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: dynamikWinterStorage.meta.titleFr,
  description: dynamikWinterStorage.meta.descriptionFr,
  openGraph: {
    title: dynamikWinterStorage.meta.titleFr,
    description: dynamikWinterStorage.meta.descriptionFr,
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

export default function DynamikWinterStoragePage() {
  return <ServicePage data={dynamikWinterStorage} />;
}
