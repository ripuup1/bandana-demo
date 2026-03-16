'use client';

import { useState } from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Human', value: 'human' },
  { label: 'Dog', value: 'dog' },
  { label: 'Waterproof', value: 'waterproof' },
  { label: 'Bundles', value: 'bundle' },
];

const sorts = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low \u2192 High', value: 'price-asc' },
  { label: 'Price: High \u2192 Low', value: 'price-desc' },
];

export default function FilterBar({
  activeFilter,
  activeSort,
  onFilterChange,
  onSortChange,
}: {
  activeFilter: string;
  activeSort: string;
  onFilterChange: (val: string) => void;
  onSortChange: (val: string) => void;
}) {
  const [showSort, setShowSort] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
      <div className="flex items-center gap-2 flex-wrap">
        <SlidersHorizontal size={16} strokeWidth={1.5} className="text-muted sm:hidden" />
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`px-4 py-2 text-[11px] font-body font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
              activeFilter === f.value
                ? 'bg-primary text-warm'
                : 'bg-transparent text-primary/60 hover:text-primary border border-primary/15'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          onClick={() => setShowSort(!showSort)}
          className="flex items-center gap-2 text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-primary/60 hover:text-primary transition-colors duration-200"
        >
          <ArrowUpDown size={14} strokeWidth={1.5} />
          {sorts.find(s => s.value === activeSort)?.label || 'Sort'}
        </button>
        {showSort && (
          <div className="absolute right-0 top-full mt-2 bg-white border border-primary/10 shadow-lg z-20 min-w-[180px]">
            {sorts.map(s => (
              <button
                key={s.value}
                onClick={() => { onSortChange(s.value); setShowSort(false); }}
                className={`block w-full text-left px-4 py-3 text-[11px] font-body uppercase tracking-[0.08em] transition-colors duration-200 ${
                  activeSort === s.value ? 'text-accent bg-accent/5' : 'text-primary/70 hover:bg-primary/5'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
