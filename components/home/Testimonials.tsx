import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <ScrollReveal>
          <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-tight text-center">
            WHAT PEOPLE SAY
          </h2>
        </ScrollReveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 100}>
              <div className="bg-white p-8 border border-primary/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      strokeWidth={1.5}
                      className={j < t.rating ? 'fill-accent text-accent' : 'text-primary/20'}
                    />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-primary/80 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em]">
                  {t.author}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
