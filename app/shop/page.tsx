'use client';

import { useState, useMemo } from 'react';
import { products, getProductsByTag } from '@/data/products';
import FilterBar from '@/components/shop/FilterBar';
import ProductGrid from '@/components/shop/ProductGrid';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ShopPage() {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let result = getProductsByTag(filter);
    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return result;
  }, [filter, sort]);

  return (
    <div className="pt-20 md:pt-24">
      <div className="relative bg-primary grain py-16 md:py-24">
        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <h1 className="font-headline text-warm text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            THE SHOP
          </h1>
          <p className="mt-3 text-warm/50 font-body text-lg">
            {products.length} products
          </p>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-12 py-10 md:py-14">
        <FilterBar
          activeFilter={filter}
          activeSort={sort}
          onFilterChange={setFilter}
          onSortChange={setSort}
        />
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-primary/50 font-body">No products found in this category.</p>
          </div>
        ) : (
          <ProductGrid products={filtered} />
        )}
      </div>
    </div>
  );
}
