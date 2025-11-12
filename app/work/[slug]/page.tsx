import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
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
    description: project.overview || `THAN Studio 案例研究: ${project.category}`,
  };
}

export default function WorkDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div className="pt-32 px-6">项目未找到</div>;
  }

  // 构建交替画廊块：index % 3 === 0 全宽；否则并排双图
  const galleryBlocks: React.ReactNode[] = [];
  const gallery = project.gallery || [];
  for (let i = 0; i < gallery.length; i++) {
    if (i % 3 === 0) {
      galleryBlocks.push(
        <div key={`full-${i}`} className="w-full">
          <Image
            src={gallery[i]}
            alt={`${project.title} - image ${i + 1}`}
            width={1920}
            height={1080}
            className="w-full h-[60vh] md:h-[70vh] object-cover rounded-lg"
          />
        </div>
      );
    } else {
      const second = gallery[i + 1];
      galleryBlocks.push(
        <div key={`pair-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src={gallery[i]}
            alt={`${project.title} - image ${i + 1}`}
            width={1200}
            height={800}
            className="w-full h-[40vh] md:h-[50vh] object-cover rounded-lg"
          />
          {second ? (
            <Image
              src={second}
              alt={`${project.title} - image ${i + 2}`}
              width={1200}
              height={800}
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-lg"
            />
          ) : null}
        </div>
      );
      if (second) i += 1; // 已消费第二张
    }
  }

  // 下一个项目
  const currentIndex = PROJECT_DATA.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECT_DATA[(currentIndex + 1) % PROJECT_DATA.length];

  return (
    <article className="bg-brand-white text-brand-black">
      {/* 模块 1：沉浸式 Hero */}
      <section className="pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-red font-bold tracking-widest uppercase mb-4">
            {project.category}
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold mb-8">{project.title}</h1>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={1920}
            height={1080}
            className="w-full h-[60vh] md:h-[80vh] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* 模块 2：项目信息栏 */}
      <section className="max-w-6xl mx-auto px-6 border-y border-gray-100 py-8 my-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-sm text-brand-gray-dark">Client</p>
            <p className="font-medium">{project.client}</p>
          </div>
          <div>
            <p className="text-sm text-brand-gray-dark">Year</p>
            <p className="font-medium">{project.year}</p>
          </div>
          <div>
            <p className="text-sm text-brand-gray-dark">Services</p>
            <ul className="font-medium space-y-1">
              {(project.services || []).map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-brand-gray-dark">Role</p>
            <p className="font-medium">Art Direction & Design</p>
          </div>
        </div>
      </section>

      {/* 模块 3：设计叙事 */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xl font-medium leading-relaxed">{project.overview}</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="mb-12">
              <h3 className="text-brand-gray-dark mb-2">The Challenge</h3>
              <p className="text-lg">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-brand-gray-dark mb-2">The Solution</h3>
              <p className="text-lg">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 模块 4：动态画廊 */}
      <section className="max-w-6xl mx-auto px-6 mt-24 flex flex-col gap-16">
        {galleryBlocks}
      </section>

      {/* 模块 5：底部导航（Next Project） */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <Link href={`/work/${nextProject.slug}`} className="group block relative">
          <Image
            src={nextProject.imageSrc}
            alt={nextProject.title}
            width={1920}
            height={1080}
            className="w-full h-[50vh] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <span className="text-white text-2xl md:text-3xl font-semibold">Next Project：{nextProject.title}</span>
          </div>
        </Link>
      </section>
    </article>
  );
}