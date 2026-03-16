'use client';

import Link from 'next/link';
import { ShoppingBag, Package } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/Toast';
import { formatCurrency } from '@/lib/utils';

export default function ProductCard({ product, dark = false }: { product: Product; dark?: boolean }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      quantity: 1,
      color: product.colors[0].name,
      size: product.sizes[0],
      image: product.images[0],
    });
    showToast(`${product.name} added to cart!`);
  };

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-secondary/30">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full aspect-square object-cover transition-transform duration-400 group-hover:scale-105"
        />
        {product.tags.includes('bundle') && (
          <div className="absolute top-3 left-3 bg-accent text-warm px-3 py-1 flex items-center gap-1.5">
            <Package size={14} strokeWidth={1.5} />
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.08em]">Bundle</span>
          </div>
        )}
        {product.tags.includes('waterproof') && !product.tags.includes('bundle') && (
          <div className="absolute top-3 left-3 bg-primary text-warm px-3 py-1">
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.08em]">Waterproof</span>
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-primary text-warm p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:bg-accent"
          aria-label="Add to cart"
        >
          <ShoppingBag size={18} strokeWidth={1.5} />
        </button>
      </div>
      <div className={`mt-4 ${dark ? 'text-warm' : 'text-primary'}`}>
        <h3 className="font-body font-semibold text-base">{product.name}</h3>
        <p className={`mt-1 text-sm ${dark ? 'text-warm/60' : 'text-primary/60'} line-clamp-1`}>
          {product.description}
        </p>
        <p className="mt-2 text-base font-semibold text-accent">{formatCurrency(product.price)}</p>
      </div>
    </Link>
  );
}
