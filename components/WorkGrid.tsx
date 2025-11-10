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


export function WorkGrid() {
  return (
    /*
     * 修正点 2: 确认 UI 布局参数。
     * 布局: grid
     * 列数: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     * 间距: gap-x-8 gap-y-12
     */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {PROJECT_DATA.map((project) => (
        <Link key={project.id} href={`/work/${project.slug}`} className="group block">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={300}
            height={225}
            className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
          {/* 文本内容 */}
          <div className="mt-4">
            {/* 标题 - UI参数: font-semibold text-brand-black text-lg */}
            <h3 className="font-semibold text-brand-black text-lg">
              {project.title}
            </h3>
            {/* 类别 - UI参数: text-sm text-brand-gray-dark mt-1 */}
            <p className="text-sm text-brand-gray-dark mt-1">
              {project.category}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WorkGrid;