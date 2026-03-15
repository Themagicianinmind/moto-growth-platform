'use client';

import ServicePage from '@/components/shared/ServicePage';
import { dynamikModifications } from '@/lib/service-pages';

export default function DynamikModificationsPage() {
  return <ServicePage data={dynamikModifications} />;
}
