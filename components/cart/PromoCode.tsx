'use client';

import { useToast } from '@/components/ui/Toast';

export default function PromoCode() {
  const { showToast } = useToast();

  return (
    <div className="mt-4 flex gap-2">
      <input
        type="text"
        placeholder="Promo code"
        className="flex-1 h-10 px-3 border border-primary/15 text-sm font-body placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
      />
      <button
        onClick={() => showToast('Demo mode — promo codes coming soon!')}
        className="h-10 px-4 bg-primary text-warm text-[11px] font-body font-semibold uppercase tracking-[0.08em] hover:bg-primary/90 transition-colors duration-200"
      >
        Apply
      </button>
    </div>
  );
}
