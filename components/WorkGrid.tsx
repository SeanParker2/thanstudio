// components/WorkGrid.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECT_DATA } from '@/lib/projects';

/*
  修正点 1:
  创建一个包含 30 个项目的 MOCK_PROJECTS 数组。
  所有 imageSrc 都使用 '/images/hero-image-2.jpeg'。
*/


export function WorkGrid({ active }: { active: string }) {
  const filteredProjects = PROJECT_DATA.filter(
    (p) => active === 'all' || p.categoryKey === active
  );
  const orderedProjects = [...filteredProjects].sort((a, b) => {
    if (a.slug === 'tomato-writer-app') return -1;
    if (b.slug === 'tomato-writer-app') return 1;
    return a.id - b.id;
  });

  return (
    /*
     * 修正点 2: 确认 UI 布局参数。
     * 布局: grid
     * 列数: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     * 间距: gap-x-8 gap-y-12
     */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {orderedProjects.map((project) => (
        <Link key={project.id} href={`/work/${project.slug}`} className="group block">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={300}
              height={225}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            {/* 查看详情遮罩 */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm md:text-base font-medium tracking-wide uppercase">View Project</span>
            </div>
          </div>
          {/* 文本内容 */}
          <div className="mt-4">
            <h3 className="font-semibold text-brand-black text-lg">{project.title}</h3>
            <p className="text-sm text-brand-gray-dark mt-1">{project.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WorkGrid;