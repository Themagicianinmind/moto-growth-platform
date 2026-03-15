'use client';

import ServicePage from '@/components/shared/ServicePage';
import { dynamikTowing } from '@/lib/service-pages';

export default function DynamikTowingPage() {
  return <ServicePage data={dynamikTowing} />;
}
