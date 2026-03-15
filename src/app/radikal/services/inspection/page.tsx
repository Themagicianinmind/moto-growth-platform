import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { radikalInspection } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: radikalInspection.meta.titleFr,
  description: radikalInspection.meta.descriptionFr,
  openGraph: {
    title: radikalInspection.meta.titleFr,
    description: radikalInspection.meta.descriptionFr,
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

export default function RadikalInspectionPage() {
  return <ServicePage data={radikalInspection} />;
}
