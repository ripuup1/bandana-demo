'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CircleCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency, calculateTax, calculateShipping } from '@/lib/utils';

export default function ConfirmationPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const hasCleared = useRef(false);

  const shipping = calculateShipping(cartTotal);
  const tax = calculateTax(cartTotal);
  const total = cartTotal + shipping + tax;

  const items = [...cartItems];

  useEffect(() => {
    if (!hasCleared.current && cartItems.length > 0) {
      hasCleared.current = true;
      setTimeout(() => clearCart(), 100);
    }
  }, []);

  return (
    <div className="pt-28 md:pt-36 pb-20">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <CircleCheck size={64} strokeWidth={1.5} className="text-accent mx-auto mb-6" />

        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
          ORDER CONFIRMED!
        </h1>
        <p className="mt-4 text-primary/60 font-body text-lg leading-relaxed max-w-md mx-auto">
          Thanks for your order. This is a demo, so nothing will actually ship — but if it were real, you&apos;d look great.
        </p>

        <div className="mt-10 bg-white border border-primary/10 p-6 md:p-8 text-left">
          <div className="grid grid-cols-2 gap-4 text-sm font-body">
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-primary/50 mb-1">Order Number</p>
              <p className="font-semibold">#BAND-2026-0001</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-primary/50 mb-1">Date</p>
              <p className="font-semibold">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-primary/50 mb-1">Shipping To</p>
              <p className="font-semibold">Demo Customer</p>
              <p className="text-primary/60">123 Bandana Blvd<br />Austin, TX 78701</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-primary/50 mb-1">Total Charged</p>
              <p className="font-bold text-lg text-accent">{formatCurrency(total > 0 ? total : 69.95)}</p>
            </div>
          </div>

          {items.length > 0 && (
            <div className="mt-6 pt-6 border-t border-primary/10">
              <p className="text-[11px] uppercase tracking-[0.1em] text-primary/50 mb-3">Items Ordered</p>
              {items.map((item, i) => (
                <div key={i} className="flex justify-between py-2 text-sm font-body">
                  <span>{item.name} x{item.quantity} <span className="text-primary/40">({item.color}, {item.size})</span></span>
                  <span className="font-semibold">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-accent text-warm px-8 py-[14px] text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-accent/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
          >
            CONTINUE SHOPPING
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-primary/20 text-primary px-8 py-[14px] text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:border-primary/40 transition-all duration-200"
          >
            BACK TO HOME
          </Link>
        </div>

        <p className="mt-10 text-sm text-primary/40 font-body">
          Have questions? Contact us at hello@bandera.com (not a real email)
        </p>
      </div>
    </div>
  );
}
