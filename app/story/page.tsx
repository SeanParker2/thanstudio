import React from 'react';
export const metadata = {
  title: '我们的故事',
  description: '了解 THAN Studio 的理念、团队与实践，探寻设计背后的故事。',
};
import { StoryHero } from '@/components/StoryHero';
import { StoryIntro } from '@/components/StoryIntro';
import { StoryManifesto } from '@/components/StoryManifesto';
import { StoryJoinUs } from '@/components/StoryJoinUs';

export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <StoryIntro />
      <StoryManifesto />
      <StoryJoinUs />
    </>
  );
}