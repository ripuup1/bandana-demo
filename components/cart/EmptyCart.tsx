import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function EmptyCart() {
  return (
    <div className="text-center py-20">
      <ShoppingBag size={48} strokeWidth={1.5} className="text-primary/20 mx-auto mb-6" />
      <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-tight">Your cart is empty</h2>
      <p className="mt-3 text-primary/60 font-body">Let&apos;s fix that.</p>
      <Link
        href="/shop"
        className="inline-flex items-center mt-8 bg-accent text-warm px-8 py-[14px] text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-accent/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
      >
        START SHOPPING
      </Link>
    </div>
  );
}
