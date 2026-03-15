import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { dynamikVespaSales } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: dynamikVespaSales.meta.titleFr,
  description: dynamikVespaSales.meta.descriptionFr,
  openGraph: {
    title: dynamikVespaSales.meta.titleFr,
    description: dynamikVespaSales.meta.descriptionFr,
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

export default function DynamikVespaSalesPage() {
  return <ServicePage data={dynamikVespaSales} />;
}
