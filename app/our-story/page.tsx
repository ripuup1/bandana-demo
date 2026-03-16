import { Award, Mountain, Users } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const timeline = [
  { year: '2024', text: 'The idea. Two friends, one dog, one bandana that fell apart on a hike.' },
  { year: '2025', text: 'First prototypes. Tested on trails, beaches, and one very patient golden retriever.' },
  { year: '2025', text: 'The Dry Shield is born. Waterproof technology meets everyday style.' },
  { year: '2026', text: 'BANDERA launches. Built for everything.' },
];

const values = [
  {
    icon: Award,
    title: 'Quality',
    desc: 'We obsess over materials, stitching, and durability. Every bandana is built to last through whatever you throw at it.',
  },
  {
    icon: Mountain,
    title: 'Adventure',
    desc: 'From summit pushes to coffee runs — we believe every day holds the potential for a small adventure.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'BANDERA is for everyone. Dog people, trail runners, weekend warriors, and anyone who appreciates a great accessory.',
  },
];

export default function OurStoryPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative bg-primary grain py-24 md:py-36">
        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <h1 className="font-headline text-warm text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            OUR STORY
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="space-y-6 text-base md:text-lg text-primary/80 leading-relaxed font-body">
              <p>
                BANDERA started the way most great things start — with a problem. Two friends on a hike, a dog
                who couldn&apos;t keep his bandana on, and a cheap accessory that fell apart by mile three.
              </p>
              <p>
                We knew bandanas could be better. Not just as fashion — as functional gear. Something that could
                handle sweat, rain, UV rays, and a golden retriever who thinks every lake is a swimming pool.
              </p>
              <p>
                So we set out to make the world&apos;s most versatile bandana. Premium materials. Thoughtful
                construction. Designed for humans and dogs alike. Because the best adventures are the ones you
                share — and you should both look good doing it.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://placehold.co/800x1000/E8DCC8/1a1a1a?text=Our+Story"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-primary grain relative py-20 md:py-28">
        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="font-headline text-warm text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-12">
              THE JOURNEY
            </h2>
          </ScrollReveal>
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex gap-6 md:gap-10 items-start">
                  <span className="font-headline text-accent text-3xl md:text-4xl flex-shrink-0 w-20">
                    {item.year}
                  </span>
                  <p className="text-warm/70 font-body text-base md:text-lg leading-relaxed pt-2">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-20 md:py-28">
        <ScrollReveal>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-12 text-center">
            WHAT WE STAND FOR
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center p-8 border border-primary/10">
                <v.icon size={32} strokeWidth={1.5} className="text-accent mx-auto mb-4" />
                <h3 className="font-headline text-xl uppercase tracking-tight mb-3">{v.title}</h3>
                <p className="text-sm text-primary/70 leading-relaxed font-body">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
