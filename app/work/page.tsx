import React from 'react';
import { WorkFilter } from '@/components/WorkFilter';
import { WorkGrid } from '@/components/WorkGrid';

export default function WorkPage() {
  return (
    <section className="bg-brand-white text-brand-black py-32">
      <div className="max-w-6xl mx-auto px-6">
        <WorkFilter />
        <div className="mb-12" />
        <WorkGrid />
      </div>
    </section>
  );
}