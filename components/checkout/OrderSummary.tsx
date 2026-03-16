'use client';

import { useState } from 'react';
import { Truck, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency, calculateTax, calculateShipping } from '@/lib/utils';
import PromoCode from '@/components/cart/PromoCode';

export default function OrderSummary() {
  const { cartItems, cartTotal } = useCart();
  const [expanded, setExpanded] = useState(false);
  const shipping = calculateShipping(cartTotal);
  const tax = calculateTax(cartTotal);
  const total = cartTotal + shipping + tax;

  const visibleItems = expanded ? cartItems : cartItems.slice(0, 3);
  const hasMore = cartItems.length > 3;

  return (
    <div className="bg-white border border-primary/10 p-6 md:p-8 lg:sticky lg:top-24">
      <h3 className="text-[12px] font-body font-semibold uppercase tracking-[0.1em] mb-6">Order Summary</h3>

      <div className="space-y-4 mb-4">
        {visibleItems.map((item, i) => (
          <div key={`${item.productId}-${item.color}-${item.size}`} className="flex gap-3 items-center">
            <div className="relative flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-14 h-14 object-cover bg-secondary/30" />
              <span className="absolute -top-2 -right-2 bg-primary text-warm text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-body font-medium truncate">{item.name}</p>
              <p className="text-[10px] text-primary/50 uppercase tracking-wider">{item.color} / {item.size}</p>
            </div>
            <p className="text-sm font-body font-semibold">{formatCurrency(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-[11px] font-body text-accent mb-4 hover:underline"
        >
          {expanded ? (
            <>Show less <ChevronUp size={14} /></>
          ) : (
            <>Show all {cartItems.length} items <ChevronDown size={14} /></>
          )}
        </button>
      )}

      <div className="border-t border-primary/10 pt-4 space-y-3 text-sm font-body">
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

      <div className="mt-4 flex items-center gap-2 text-xs font-body">
        <Truck size={14} strokeWidth={1.5} className="text-accent" />
        <span className="text-primary/50">Free shipping on orders over $50</span>
      </div>
    </div>
  );
}
