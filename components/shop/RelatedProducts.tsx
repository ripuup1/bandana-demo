import { getRelatedProducts } from '@/data/products';
import ProductCard from './ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedProducts(currentSlug, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-20 md:py-28 border-t border-primary/10">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <ScrollReveal>
          <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-tight mb-10">
            YOU MIGHT ALSO LIKE
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 100}>
              <ProductCard product={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
