'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductAccordion({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-primary/10">
      {items.map((item, i) => (
        <div key={i} className="border-b border-primary/10">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="text-[12px] font-body font-semibold uppercase tracking-[0.08em]">
              {item.title}
            </span>
            {openIndex === i ? (
              <ChevronUp size={18} strokeWidth={1.5} className="text-primary/40" />
            ) : (
              <ChevronDown size={18} strokeWidth={1.5} className="text-primary/40 group-hover:text-primary transition-colors duration-200" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-primary/70 leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
