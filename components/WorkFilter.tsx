'use client';

import React from 'react';

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

type WorkFilterProps = {
  active: string;
  setActive: (key: string) => void;
};

export function WorkFilter({ active, setActive }: WorkFilterProps) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {FILTERS.map((key) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={
              isActive
                ? 'text-brand-red font-semibold text-sm'
                : 'text-brand-gray-dark hover:text-brand-black text-sm transition-colors'
            }
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default WorkFilter;