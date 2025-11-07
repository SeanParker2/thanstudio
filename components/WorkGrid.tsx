// components/WorkGrid.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*
  修正点 1:
  创建一个包含 30 个项目的 MOCK_PROJECTS 数组。
  所有 imageSrc 都使用 '/images/hero-image-2.jpeg'。
*/

interface Project {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
}

const MOCK_PROJECTS: Project[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  imageSrc: '/images/hero-image-2.jpeg', // 统一使用此占位符
  title: `示例作品 #${i + 1}`,
  category: i % 3 === 0 ? 'Branding' : i % 3 === 1 ? 'Graphic' : 'Package',
}));

export function WorkGrid() {
  return (
    /*
     * 修正点 2: 确认 UI 布局参数。
     * 布局: grid
     * 列数: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     * 间距: gap-x-8 gap-y-12
     */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {MOCK_PROJECTS.map((project) => (
        <Link key={project.id} href="#" className="group block">
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