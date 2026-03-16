'use client';

import { useState } from 'react';
import { Clock, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const methods = [
  { id: 'standard', label: 'Standard Shipping', time: '5-7 business days', freeOver50: true, price: 5.95 },
  { id: 'express', label: 'Express Shipping', time: '2-3 business days', freeOver50: false, price: 12.95 },
  { id: 'overnight', label: 'Overnight Shipping', time: 'Next business day', freeOver50: false, price: 24.95 },
];

export default function ShippingMethod() {
  const [selected, setSelected] = useState('standard');
  const { cartTotal } = useCart();

  return (
    <div className="mb-10">
      <h2 className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-primary/50 mb-6">
        Shipping Method
      </h2>
      <div className="space-y-3">
        {methods.map(m => {
          const isFree = m.freeOver50 && cartTotal >= 50;
          return (
            <label
              key={m.id}
              className={`flex items-center justify-between p-4 border cursor-pointer transition-all duration-200 ${
                selected === m.id
                  ? 'border-accent bg-accent/5'
                  : 'border-primary/15 hover:border-primary/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="shipping"
                  value={m.id}
                  checked={selected === m.id}
                  onChange={() => setSelected(m.id)}
                  className="custom-radio"
                />
                <div>
                  <p className="text-sm font-body font-semibold">{m.label}</p>
                  <p className="text-[11px] text-primary/50 flex items-center gap-1 mt-0.5">
                    <Clock size={12} strokeWidth={1.5} />
                    {m.time}
                  </p>
                </div>
              </div>
              <span className={`text-sm font-body font-semibold ${isFree ? 'text-accent' : ''}`}>
                {isFree ? 'FREE' : `$${m.price.toFixed(2)}`}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
