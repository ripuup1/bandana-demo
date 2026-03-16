import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      {products.map((product, i) => (
        <ScrollReveal key={product.id} delay={i * 80}>
          <ProductCard product={product} />
        </ScrollReveal>
      ))}
    </div>
  );
}
