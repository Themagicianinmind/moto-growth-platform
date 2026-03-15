import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { dynamikModifications } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: dynamikModifications.meta.titleFr,
  description: dynamikModifications.meta.descriptionFr,
  openGraph: {
    title: dynamikModifications.meta.titleFr,
    description: dynamikModifications.meta.descriptionFr,
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

export default function DynamikModificationsPage() {
  return <ServicePage data={dynamikModifications} />;
}
