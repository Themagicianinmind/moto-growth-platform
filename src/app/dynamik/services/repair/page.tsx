import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { dynamikRepair } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: dynamikRepair.meta.titleFr,
  description: dynamikRepair.meta.descriptionFr,
  openGraph: {
    title: dynamikRepair.meta.titleFr,
    description: dynamikRepair.meta.descriptionFr,
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

export default function DynamikRepairPage() {
  return <ServicePage data={dynamikRepair} />;
}
