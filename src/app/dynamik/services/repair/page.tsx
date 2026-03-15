'use client';

import ServicePage from '@/components/shared/ServicePage';
import { dynamikRepair } from '@/lib/service-pages';

export default function DynamikRepairPage() {
  return <ServicePage data={dynamikRepair} />;
}
