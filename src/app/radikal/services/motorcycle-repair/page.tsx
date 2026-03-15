import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { radikalMotorcycleRepair } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: radikalMotorcycleRepair.meta.titleFr,
  description: radikalMotorcycleRepair.meta.descriptionFr,
  openGraph: {
    title: radikalMotorcycleRepair.meta.titleFr,
    description: radikalMotorcycleRepair.meta.descriptionFr,
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

export default function RadikalMotorcycleRepairPage() {
  return <ServicePage data={radikalMotorcycleRepair} />;
}
