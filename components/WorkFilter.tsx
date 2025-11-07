'use client';

import React from 'react';
import Link from 'next/link';

const FILTERS = [
  'all',
  'branding',
  'graphic',
  'product',
  'space',
  'package',
  'ip',
  'illustration',
] as const;

export function WorkFilter() {
  const active = 'all';
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {FILTERS.map((key) => {
        const isActive = key === active;
        return (
          <Link
            key={key}
            href="#"
            className={
              isActive
                ? 'text-brand-red font-semibold text-sm'
                : 'text-brand-gray-dark hover:text-brand-black text-sm transition-colors'
            }
          >
            {key}
          </Link>
        );
      })}
    </div>
  );
}

export default WorkFilter;