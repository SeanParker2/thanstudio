import React from 'react';
import { StoryHero } from '@/components/StoryHero';
import { StoryIntro } from '@/components/StoryIntro';
import { StoryManifesto } from '@/components/StoryManifesto';
import { StoryTeam } from '@/components/StoryTeam';
import { StoryJoinUs } from '@/components/StoryJoinUs';

export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <StoryIntro />
      <StoryManifesto />
      <StoryTeam />
      <StoryJoinUs />
    </>
  );
}