import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { radikalSnowmobile } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: radikalSnowmobile.meta.titleFr,
  description: radikalSnowmobile.meta.descriptionFr,
  openGraph: {
    title: radikalSnowmobile.meta.titleFr,
    description: radikalSnowmobile.meta.descriptionFr,
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

export default function RadikalSnowmobilePage() {
  return <ServicePage data={radikalSnowmobile} />;
}
