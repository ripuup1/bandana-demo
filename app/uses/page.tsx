'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { uses } from '@/data/uses';
import ScrollReveal from '@/components/ui/ScrollReveal';

const sizeClasses = [
  'text-4xl md:text-6xl',
  'text-2xl md:text-3xl',
  'text-3xl md:text-5xl',
  'text-lg md:text-2xl',
  'text-4xl md:text-6xl',
  'text-xl md:text-3xl',
  'text-2xl md:text-4xl',
  'text-3xl md:text-5xl',
  'text-lg md:text-xl',
  'text-4xl md:text-6xl',
  'text-2xl md:text-3xl',
  'text-3xl md:text-5xl',
  'text-xl md:text-2xl',
  'text-lg md:text-xl',
  'text-3xl md:text-4xl',
  'text-4xl md:text-6xl',
  'text-2xl md:text-3xl',
  'text-xl md:text-2xl',
  'text-3xl md:text-5xl',
  'text-2xl md:text-3xl',
  'text-lg md:text-2xl',
  'text-4xl md:text-5xl',
  'text-xl md:text-3xl',
  'text-3xl md:text-4xl',
];

const colorClasses = [
  'text-primary',
  'text-accent',
  'text-primary/70',
  'text-accent',
  'text-primary',
  'text-primary/50',
  'text-accent',
  'text-primary',
  'text-accent',
  'text-primary/70',
  'text-primary',
  'text-accent',
  'text-primary',
  'text-accent',
  'text-primary/70',
  'text-accent',
  'text-primary',
  'text-primary/50',
  'text-accent',
  'text-primary',
  'text-accent',
  'text-primary/70',
  'text-primary',
  'text-accent',
];

const rotations = [
  '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1',
  'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3',
  'rotate-1', '-rotate-2', 'rotate-3', '-rotate-1',
  'rotate-2', '-rotate-3', 'rotate-1', '-rotate-2',
  '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1',
  'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3',
];

export default function UsesPage() {
  return (
    <div className="pt-20 md:pt-24 overflow-x-hidden">
      {/* Header */}
      <div className="relative bg-primary grain py-20 md:py-32">
        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <h1 className="font-headline text-warm text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95]">
            ONE BANDANA.
          </h1>
          <h1 className="font-headline text-accent text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95] mt-2">
            OKAY, 24 USES.
          </h1>
        </div>
      </div>

      {/* Uses Grid */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="space-y-4 md:space-y-6">
          {uses.map((use, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div
                className={`uses-item font-headline uppercase tracking-tight cursor-default ${sizeClasses[i]} ${colorClasses[i]} ${rotations[i]} inline-block`}
              >
                {use}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-accent py-16 md:py-24">
        <div className="max-w-site mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-headline text-warm text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
              CONVINCED?
            </h2>
            <h2 className="font-headline text-warm text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
              GET YOURS.
            </h2>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-warm px-8 py-[14px] text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-primary/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 group"
            >
              SHOP NOW
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* Submit Your Use */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-16 md:py-24">
        <ScrollReveal>
          <div className="max-w-lg mx-auto text-center">
            <h3 className="font-headline text-2xl md:text-3xl uppercase tracking-tight mb-4">
              GOT A USE WE MISSED?
            </h3>
            <p className="text-primary/60 font-body text-sm mb-6">
              Tell us how you rock your BANDERA. Best ones get featured.
            </p>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Your bandana use..."
                className="flex-1 h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
              />
              <button className="h-12 px-6 bg-accent text-warm text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors duration-200">
                SUBMIT
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
