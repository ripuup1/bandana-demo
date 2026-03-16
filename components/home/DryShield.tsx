import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function DryShield() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
                THE DRY SHIELD
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-base md:text-lg text-primary/80 leading-relaxed max-w-lg">
                Keep your hair in place and protected. Our waterproof bandana puts a protective spin on a favorite accessory.
                The satin-lined interior reduces friction and static to prevent breakage. From trail runs to rainy commutes — your hair stays perfect.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link
                href="/shop/the-dry-shield"
                className="inline-flex items-center mt-8 bg-primary text-warm px-8 py-[14px] text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-primary/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
              >
                SHOP DRY SHIELD
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1434389677669-e08b4cda3a00?w=600&h=600&fit=crop&q=80"
                alt="The Dry Shield"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
