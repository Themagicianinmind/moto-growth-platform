'use client';

import ServicePage from '@/components/shared/ServicePage';
import { dynamikMaintenance } from '@/lib/service-pages';

export default function DynamikMaintenancePage() {
  return <ServicePage data={dynamikMaintenance} />;
}
