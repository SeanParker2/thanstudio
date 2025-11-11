'use client';

import React, { useState } from 'react';
import { WorkFilter } from '@/components/WorkFilter';
import { WorkGrid } from '@/components/WorkGrid';

export default function WorkContent() {
  const [activeFilter, setActiveFilter] = useState('all');
  return (
    <>
      <WorkFilter active={activeFilter} setActive={setActiveFilter} />
      <div className="mb-12" />
      <WorkGrid active={activeFilter} />
    </>
  );
}