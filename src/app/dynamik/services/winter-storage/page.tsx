'use client';

import ServicePage from '@/components/shared/ServicePage';
import { dynamikWinterStorage } from '@/lib/service-pages';

export default function DynamikWinterStoragePage() {
  return <ServicePage data={dynamikWinterStorage} />;
}
