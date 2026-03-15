import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { dynamikMaintenance } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: dynamikMaintenance.meta.titleFr,
  description: dynamikMaintenance.meta.descriptionFr,
  openGraph: {
    title: dynamikMaintenance.meta.titleFr,
    description: dynamikMaintenance.meta.descriptionFr,
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

export default function DynamikMaintenancePage() {
  return <ServicePage data={dynamikMaintenance} />;
}
