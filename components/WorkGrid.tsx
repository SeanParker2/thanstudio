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

const MOCK_PROJECTS: Project[] = [
  { id: 1, imageSrc: '/images/Mask group.png', title: '字节范APP品牌形象', category: '字节跳动' },
  { id: 2, imageSrc: '/images/Mask group-1.png', title: '双人画展海报', category: '深圳报业集团' },
  { id: 3, imageSrc: '/images/Mask group-2.png', title: '番茄作家助手APP', category: '字节跳动' },
  { id: 4, imageSrc: '/images/Mask group-3.png', title: '香海园西街', category: '华侨城' },
  { id: 5, imageSrc: '/images/Mask group-4.png', title: '番茄作家助手APP', category: '字节跳动' },
  { id: 6, imageSrc: '/images/Mask group-5.png', title: 'UI昆虫-温情银行金融形象', category: '金利行' },
  { id: 7, imageSrc: '/images/Mask group-6.png', title: '黄茅咀湿地博物馆', category: '中国电影美术学会' },
  { id: 8, imageSrc: '/images/Mask group-7.png', title: '午餐江山图鉴矿泉水', category: '农夫山泉' },
  { id: 9, imageSrc: '/images/Mask group-8.png', title: '坪山入画图开幕式', category: '坪山美术馆' },
  { id: 10, imageSrc: '/images/Mask group-9.png', title: '数字云栖建筑设计', category: '华润置地' },
  { id: 11, imageSrc: '/images/Mask group-10.png', title: '平安银行品牌合作', category: '平安银行' },
  { id: 12, imageSrc: '/images/Mask group-11.png', title: '呼儿出彩开幕式', category: '坪山美术馆' },
  { id: 13, imageSrc: '/images/Mask group-12.png', title: '即时引爆力品牌-全动研包装', category: '怡宝' },
  { id: 14, imageSrc: '/images/Mask group-13.png', title: '共振市场升级', category: '金地商置' },
  { id: 15, imageSrc: '/images/Mask group-14.png', title: '幸福生活空间包装', category: '金地商置' },
  { id: 16, imageSrc: '/images/Mask group-15.png', title: '绘图室设计', category: 'THAN' },
  { id: 17, imageSrc: '/images/Mask group-16.png', title: '太阳花鼓文创品牌包装', category: '深圳报业' },
  { id: 18, imageSrc: '/images/Mask group-17.png', title: '上海新天地', category: '上海新天地' },
];

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