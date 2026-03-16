import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const dogProducts = products.filter(p => p.category === 'dog');
const adventurePack = products.find(p => p.slug === 'the-adventure-pack');

const photoGrid = [
  { src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop&q=80', caption: 'Trail tested' },
  { src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=600&fit=crop&q=80', caption: 'Park approved' },
  { src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop&q=80', caption: 'Couch certified' },
  { src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&h=600&fit=crop&q=80', caption: 'Puddle proof' },
];

export default function DogCollectionPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative bg-primary grain py-20 md:py-32">
        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <h1 className="font-headline text-warm text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            FOR YOUR BEST FRIEND
          </h1>
          <p className="mt-4 text-warm/60 font-body text-lg max-w-lg">
            Performance bandanas engineered for dogs who live life to the fullest.
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-16 md:py-24">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-base md:text-lg text-primary/80 leading-relaxed font-body">
              Our dog bandanas are fun, fashionable, and the perfect addition to your pup&apos;s wardrobe.
              All moisture-wicking bandanas are breathable and quick-drying so your dog can jump in water
              while always looking sharp. With a four-way stretch, there&apos;s no struggle getting this
              bandana on and off. Designed to transition seamlessly from one activity to the next — whether
              it be hiking in the woods or watching golf at home. We&apos;re confident our top-of-the-line
              bandanas will fit your dog&apos;s lifestyle like they fit ours.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Products */}
      <div className="max-w-site mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <ScrollReveal>
          <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-tight mb-10">
            THE COLLECTION
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogProducts.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 100}>
              <ProductCard product={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Match with your pup */}
      {adventurePack && (
        <div className="bg-secondary py-16 md:py-24">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <ScrollReveal>
              <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-tight mb-4">
                MATCH WITH YOUR PUP
              </h2>
              <p className="text-primary/60 font-body mb-10 max-w-md">
                Get coordinated. The Adventure Pack includes one human bandana and one dog bandana at a discount.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="max-w-sm">
                <ProductCard product={adventurePack} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      )}

      {/* Photo Grid */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photoGrid.map((photo, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className={`overflow-hidden ${i % 2 === 1 ? 'md:mt-8' : ''}`}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <p className="mt-2 text-[11px] font-body uppercase tracking-[0.1em] text-primary/50">
                  {photo.caption}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
