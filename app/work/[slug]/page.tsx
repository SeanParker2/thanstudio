import type { Metadata } from 'next';
import Image from 'next/image';
import { getProjectBySlug, PROJECT_DATA } from '@/lib/projects';

type PageProps = { params: { slug: string } };

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return PROJECT_DATA.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: '项目未找到', description: '未找到该项目' };
  }
  return {
    title: project.title,
    description: `THAN Studio 案例研究: ${project.category}`,
  };
}

export default function WorkDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div>项目未找到</div>;
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-semibold">{project.title}</h1>
          <p className="text-2xl text-brand-gray-dark mt-6">{project.category}</p>
        </div>
      </section>

      {/* Main Image & Description */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
          <p className="text-lg text-brand-gray-dark mt-8 max-w-3xl">
            这是一个示例项目详情文案。我们通过创意与系统化的设计方法，帮助客户构建可持续的品牌资产与清晰的视觉表达。
          </p>
        </div>
      </section>
    </>
  );
}