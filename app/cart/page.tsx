'use client';

import { useCart } from '@/context/CartContext';
import CartLineItem from '@/components/cart/CartLineItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import RelatedProducts from '@/components/shop/RelatedProducts';

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="pt-20 md:pt-24">
      <div className="relative bg-primary grain py-16 md:py-20">
        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <h1 className="font-headline text-warm text-5xl md:text-6xl uppercase tracking-tight">
            YOUR BAG
          </h1>
          {cartItems.length > 0 && (
            <p className="mt-2 text-warm/50 font-body text-lg">
              {cartItems.reduce((s, i) => s + i.quantity, 0)} items
            </p>
          )}
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-12 py-10 md:py-14">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            <div>
              {cartItems.map(item => (
                <CartLineItem key={`${item.productId}-${item.color}-${item.size}`} item={item} />
              ))}
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-primary/10">
        <RelatedProducts currentSlug={cartItems[0]?.slug || 'the-classic'} />
      </div>
    </div>
  );
}
