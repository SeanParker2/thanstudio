import React from 'react';
export const metadata = {
  title: '我们的作品',
  description: '探索 THAN Studio 的精选作品集，涵盖品牌视觉、包装与数字体验设计。',
};
import WorkContent from '@/components/WorkContent';

export default function WorkPage() {
  return (
    <section className="bg-brand-white text-brand-black py-32">
      <div className="max-w-6xl mx-auto px-6">
        <WorkContent />
      </div>
    </section>
  );
}