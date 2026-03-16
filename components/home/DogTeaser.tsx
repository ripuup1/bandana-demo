import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function DogTeaser() {
  const dogProducts = products.filter(p => p.slug === 'the-good-boy' || p.slug === 'the-good-girl');

  return (
    <section className="py-20 md:py-28 bg-primary grain relative">
      <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
        <ScrollReveal>
          <h2 className="font-headline text-warm text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
            FOR YOUR BEST FRIEND
          </h2>
          <p className="mt-4 text-warm/60 text-lg font-body">
            The bandana your dog actually wants to wear.
          </p>
        </ScrollReveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {dogProducts.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 100}>
              <ProductCard product={product} dark />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 md:mt-14">
          <Link
            href="/dog-collection"
            className="inline-flex items-center gap-2 text-[12px] font-body font-semibold uppercase tracking-[0.1em] text-warm/80 hover:text-warm transition-colors duration-200 group"
          >
            EXPLORE DOG COLLECTION
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
