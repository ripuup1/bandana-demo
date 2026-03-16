import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <ScrollReveal>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
            BEST SELLERS
          </h2>
        </ScrollReveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {featured.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 100}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 md:mt-14 flex justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[12px] font-body font-semibold uppercase tracking-[0.1em] text-primary hover:text-accent transition-colors duration-200 group"
          >
            VIEW ALL
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
