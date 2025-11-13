import type { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import WorkDetailContent from '@/components/WorkDetailContent';

const slug = 'resonance-market-upgrade';
const project = getProjectBySlug(slug)!;

export const metadata: Metadata = {
  title: project.title,
  description: project.overview,
};

export default function Page() {
  return <WorkDetailContent project={project} />;
}