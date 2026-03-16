'use client';

import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 10,
}: {
  quantity: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center border border-primary/15">
      <button
        onClick={() => onChange(Math.max(min, quantity - 1))}
        className="w-12 h-12 flex items-center justify-center text-primary/60 hover:text-primary transition-colors duration-200 disabled:opacity-30"
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={16} strokeWidth={1.5} />
      </button>
      <span className="w-12 h-12 flex items-center justify-center text-sm font-body font-semibold border-x border-primary/15">
        {quantity}
      </span>
      <button
        onClick={() => onChange(Math.min(max, quantity + 1))}
        className="w-12 h-12 flex items-center justify-center text-primary/60 hover:text-primary transition-colors duration-200 disabled:opacity-30"
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}
