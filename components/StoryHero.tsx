import React from 'react';
import Image from 'next/image';
import { withBasePath } from '@/lib/site';

export function StoryHero() {
  return (
    <section className="relative w-full min-h-dvh md:h-screen overflow-hidden">
      <Image
        src={withBasePath('/images/story_banner.jpg')}
        alt="工作室 Story Banner"
        fill
        priority
        className="object-cover"
        sizes="(min-width: 768px) 100vw, 100vw"
      />
    </section>
  );
}

export default StoryHero;
