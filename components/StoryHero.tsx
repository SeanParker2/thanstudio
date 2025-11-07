import React from 'react';
import Image from 'next/image';

export function StoryHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/story_banner.jpg"
        alt="工作室 Story Banner"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}

export default StoryHero;