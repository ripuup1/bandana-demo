'use client';

import { useState } from 'react';
import { CreditCard } from 'lucide-react';

export default function PaymentForm() {
  const [sameBilling, setSameBilling] = useState(true);

  return (
    <div className="mb-10">
      <h2 className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-primary/50 mb-6">
        Payment Information
      </h2>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex gap-2">
          {['VISA', 'MC', 'AMEX', 'DISC'].map(card => (
            <div key={card} className="w-10 h-7 bg-primary/5 border border-primary/10 flex items-center justify-center">
              <span className="text-[8px] font-body font-bold text-primary/40">{card}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <CreditCard size={18} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
          <input
            type="text"
            placeholder="Card number"
            maxLength={19}
            className="w-full h-12 pl-12 pr-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="MM / YY"
            maxLength={7}
            className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
          />
          <input
            type="text"
            placeholder="CVV"
            maxLength={4}
            className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
          />
        </div>
        <input
          type="text"
          placeholder="Name on card"
          className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
        />
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={sameBilling}
            onChange={(e) => setSameBilling(e.target.checked)}
          />
          <span className="text-sm font-body text-primary/70">Billing address same as shipping</span>
        </label>
      </div>

      {!sameBilling && (
        <div className="mt-6 space-y-4 pt-6 border-t border-primary/10">
          <h3 className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-primary/50 mb-4">
            Billing Address
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200" />
            <input type="text" placeholder="Last name" className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200" />
          </div>
          <input type="text" placeholder="Address line 1" className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200" />
          <input type="text" placeholder="Address line 2 (optional)" className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200" />
          <div className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="City" className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200" />
            <input type="text" placeholder="State" className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200" />
            <input type="text" placeholder="ZIP" className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200" />
          </div>
        </div>
      )}
    </div>
  );
}
