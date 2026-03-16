'use client';

import Link from 'next/link';
import { Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency, calculateTax, calculateShipping } from '@/lib/utils';
import PromoCode from './PromoCode';

export default function CartSummary() {
  const { cartTotal } = useCart();
  const shipping = calculateShipping(cartTotal);
  const tax = calculateTax(cartTotal);
  const total = cartTotal + shipping + tax;

  return (
    <div className="bg-white border border-primary/10 p-6 md:p-8">
      <h3 className="text-[12px] font-body font-semibold uppercase tracking-[0.1em] mb-6">Order Summary</h3>

      <div className="space-y-3 text-sm font-body">
        <div className="flex justify-between">
          <span className="text-primary/60">Subtotal</span>
          <span className="font-semibold">{formatCurrency(cartTotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary/60">Shipping</span>
          <span className={`font-semibold ${shipping === 0 ? 'text-accent' : ''}`}>
            {shipping === 0 ? 'FREE' : formatCurrency(shipping)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary/60">Estimated Tax</span>
          <span className="font-semibold">{formatCurrency(tax)}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-primary/10 flex justify-between items-center">
        <span className="font-body font-semibold text-base">Total</span>
        <span className="font-body font-bold text-xl">{formatCurrency(total)}</span>
      </div>

      <PromoCode />

      <Link
        href="/checkout"
        className="mt-6 w-full flex items-center justify-center bg-accent text-warm py-4 text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-accent/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
      >
        PROCEED TO CHECKOUT
      </Link>

      <Link
        href="/shop"
        className="mt-3 w-full flex items-center justify-center border border-primary/20 text-primary py-4 text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:border-primary/40 transition-all duration-200"
      >
        CONTINUE SHOPPING
      </Link>

      {cartTotal < 50 && (
        <div className="mt-4 flex items-center gap-2 text-xs text-primary/50 font-body">
          <Truck size={14} strokeWidth={1.5} />
          <span>Add {formatCurrency(50 - cartTotal)} more for free shipping</span>
        </div>
      )}
      {cartTotal >= 50 && (
        <div className="mt-4 flex items-center gap-2 text-xs text-accent font-body font-medium">
          <Truck size={14} strokeWidth={1.5} />
          <span>Free shipping on your order!</span>
        </div>
      )}
    </div>
  );
}
