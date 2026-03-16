'use client';

import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { CartItem, useCart } from '@/context/CartContext';
import QuantitySelector from '@/components/shop/QuantitySelector';
import { formatCurrency } from '@/lib/utils';

export default function CartLineItem({ item }: { item: CartItem }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 md:gap-6 py-6 border-b border-primary/10">
      <Link href={`/shop/${item.slug}`} className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 md:w-24 md:h-24 object-cover bg-secondary/30"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={`/shop/${item.slug}`} className="font-body font-semibold text-base hover:text-accent transition-colors duration-200">
              {item.name}
            </Link>
            <p className="text-[11px] text-primary/50 uppercase tracking-[0.08em] mt-1">
              {item.color} / {item.size}
            </p>
          </div>
          <p className="font-semibold text-base whitespace-nowrap">{formatCurrency(item.price * item.quantity)}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <QuantitySelector
            quantity={item.quantity}
            onChange={(q) => updateQuantity(item.productId, item.color, item.size, q)}
          />
          <button
            onClick={() => removeFromCart(item.productId, item.color, item.size)}
            className="text-primary/40 hover:text-accent transition-colors duration-200 p-2"
            aria-label="Remove item"
          >
            <Trash2 size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
