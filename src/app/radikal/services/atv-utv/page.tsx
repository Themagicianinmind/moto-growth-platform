import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { radikalAtvUtv } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: radikalAtvUtv.meta.titleFr,
  description: radikalAtvUtv.meta.descriptionFr,
  openGraph: {
    title: radikalAtvUtv.meta.titleFr,
    description: radikalAtvUtv.meta.descriptionFr,
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

export default function RadikalAtvUtvPage() {
  return <ServicePage data={radikalAtvUtv} />;
}
