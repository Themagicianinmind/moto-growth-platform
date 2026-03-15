import type { Metadata } from 'next';
import ServicePage from '@/components/shared/ServicePage';
import { dynamikTowing } from '@/lib/service-pages';

export const metadata: Metadata = {
  title: dynamikTowing.meta.titleFr,
  description: dynamikTowing.meta.descriptionFr,
  openGraph: {
    title: dynamikTowing.meta.titleFr,
    description: dynamikTowing.meta.descriptionFr,
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

export default function DynamikTowingPage() {
  return <ServicePage data={dynamikTowing} />;
}
