'use client';

import ServicePage from '@/components/shared/ServicePage';
import { radikalInspection } from '@/lib/service-pages';

export default function RadikalInspectionPage() {
  return <ServicePage data={radikalInspection} />;
}
