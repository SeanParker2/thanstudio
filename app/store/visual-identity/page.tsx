import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import ServiceDetailContent from '@/components/ServiceDetailContent';

const slug = 'visual-identity';
const service = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.heroDescription,
};

export default function Page() {
  return <ServiceDetailContent service={service} />;
}