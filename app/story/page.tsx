import React from 'react';
import { StoryHero } from '@/components/StoryHero';
import { StoryIntro } from '@/components/StoryIntro';
import { StoryManifesto } from '@/components/StoryManifesto';

export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <StoryIntro />
      <StoryManifesto />
    </>
  );
}