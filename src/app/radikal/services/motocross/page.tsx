import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { radikalMotocross } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: radikalMotocross.meta.titleFr,
  description: radikalMotocross.meta.descriptionFr,
  openGraph: {
    title: radikalMotocross.meta.titleFr,
    description: radikalMotocross.meta.descriptionFr,
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

export default function RadikalMotocrossPage() {
  return <ServicePage data={radikalMotocross} />;
}
