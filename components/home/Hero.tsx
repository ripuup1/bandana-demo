'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Marquee from '@/components/layout/Marquee';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-primary overflow-hidden grain">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1920&h=1080&fit=crop&q=80" alt="" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="relative z-10 max-w-site mx-auto px-6 md:px-12 pt-20">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-headline text-warm text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] tracking-tight">
            ONE BANDANA.
          </h1>
          <h1 className={`font-headline text-warm text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] tracking-tight mt-2 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A THOUSAND USES.
          </h1>
        </div>

        <p className={`mt-6 md:mt-8 text-warm/70 text-lg md:text-xl font-body max-w-lg leading-relaxed transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Performance bandanas for humans, dogs, and everything in between.
        </p>

        <div className={`mt-8 md:mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/shop"
            className="inline-flex items-center bg-accent text-warm px-8 py-[14px] text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-accent/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
          >
            SHOP NOW
          </Link>
          <Link
            href="/uses"
            className="inline-flex items-center border border-warm/40 text-warm px-8 py-[14px] text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:border-warm hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
          >
            SEE ALL USES
          </Link>
        </div>
      </div>

      <div className="mt-auto relative z-10">
        <Marquee
          text="BUILT FOR EVERYTHING  →  SWEAT-PROOF  →  UV PROTECTION  →  DOG APPROVED  →  ADVENTURE READY  →"
          className="bg-accent text-warm py-3"
          speed={25}
        />
      </div>
    </section>
  );
}
