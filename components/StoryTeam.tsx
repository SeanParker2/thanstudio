import React from 'react';
import Image from 'next/image';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// 模拟数据：严格按设计稿文案与提供图片
const TEAM_DATA: { id: number; name: string; role: string; imageSrc: string }[] = [
  { id: 1, name: 'Kim WANG', role: '品牌主理人', imageSrc: `${basePath}/images/teammate1.jpg` },
  { id: 2, name: '吴进坤', role: '品牌主理人', imageSrc: `${basePath}/images/teammate2.jpg` },
  { id: 3, name: '李', role: '业务', imageSrc: `${basePath}/images/teammate3.jpg` },
  { id: 4, name: '杨小乔', role: '文案策划', imageSrc: `${basePath}/images/teammate4.jpg` },
  { id: 5, name: '彭正', role: '平面/动效', imageSrc: `${basePath}/images/teammate5.jpg` },
  { id: 6, name: 'Kim WANG', role: '品牌主理人', imageSrc: `${basePath}/images/teammate1.jpg` },
  { id: 7, name: '吴进坤', role: '品牌主理人', imageSrc: `${basePath}/images/teammate2.jpg` },
  { id: 8, name: '杨小乔', role: '文案策划', imageSrc: `${basePath}/images/teammate3.jpg` },
  { id: 9, name: '彭正', role: '平面/动效', imageSrc: `${basePath}/images/teammate4.jpg` },
  { id: 10, name: '李欣妮', role: '平面/插画', imageSrc: `${basePath}/images/teammate5.jpg` },
];

export function StoryTeam() {
  return (
    <section className="w-full bg-brand-black text-brand-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* 标题 */}
        <h2 className="text-5xl md:text-6xl font-semibold">TEAM</h2>
        {/* Slogan */}
        <p className="text-xl md:text-3xl mt-6 max-w-4xl leading-relaxed">
          我们是一群敏锐的思想家和富有创造力的创造者，我们的使命是做出我们生命中最好的工作，并且始终享受其中的乐趣。
        </p>

        {/* 团队网格 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
          {TEAM_DATA.map((member) => (
            <div key={member.id}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={300}
                height={400}
                className="w-full h-auto object-cover grayscale"
              />
              <h3 className="font-semibold text-brand-white text-lg mt-4">
                {member.name}
              </h3>
              <p className="text-sm text-brand-gray-light mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoryTeam;