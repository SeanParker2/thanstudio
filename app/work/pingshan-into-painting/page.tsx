import type { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import WorkDetailContent from '@/components/WorkDetailContent';

const slug = 'pingshan-into-painting';
const project = getProjectBySlug(slug)!;

export const metadata: Metadata = {
  title: project.title,
  description: project.overview,
};

export default function Page() {
  return <WorkDetailContent project={project} />;
}