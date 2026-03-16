'use client';

import { Mail } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';
import Marquee from '@/components/layout/Marquee';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Newsletter() {
  const { showToast } = useToast();

  return (
    <section className="bg-accent overflow-hidden">
      <Marquee
        text="SIGN UP  →  SIGN UP  →  SIGN UP  →"
        className="bg-primary text-warm py-2"
        speed={20}
      />
      <div className="py-20 md:py-28">
        <div className="max-w-site mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <Mail size={32} strokeWidth={1.5} className="text-warm mx-auto mb-6" />
            <h2 className="font-headline text-warm text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
              JOIN THE BANDWAGON
            </h2>
            <p className="mt-4 text-warm/80 text-lg font-body max-w-md mx-auto">
              First dibs on drops, dog content, and questionable bandana advice.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-12 px-4 bg-warm/10 border border-warm/30 text-warm placeholder:text-warm/50 font-body text-sm focus:outline-none focus:border-warm transition-colors duration-200"
              />
              <button
                onClick={() => showToast('Thanks for signing up!')}
                className="h-12 px-8 bg-primary text-warm text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-primary/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
              >
                SUBSCRIBE
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
