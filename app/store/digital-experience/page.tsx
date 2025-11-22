import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import { getBaseUrl } from '@/lib/site';
import ServiceDetailContent from '@/components/ServiceDetailContent';

const slug = 'digital-experience';
const service = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: service.title,
  description: service.heroDescription,
  alternates: { canonical: `${getBaseUrl()}/store/${slug}` },
};

export default function Page() {
  return <ServiceDetailContent service={service} />;
}
