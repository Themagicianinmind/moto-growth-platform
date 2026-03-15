'use client';

import ServicePage from '@/components/shared/ServicePage';
import { dynamikVespaSales } from '@/lib/service-pages';

export default function DynamikVespaSalesPage() {
  return <ServicePage data={dynamikVespaSales} />;
}
