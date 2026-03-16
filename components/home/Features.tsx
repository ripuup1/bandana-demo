import { Droplets, Sun, ShieldCheck, Dog, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const features = [
  {
    icon: Droplets,
    title: 'Moisture-Wicking',
    desc: 'Breathable and quick-drying so you (or your dog) can jump in water and always look sharp.',
  },
  {
    icon: Sun,
    title: 'UV Protection',
    desc: 'Built-in sun protection for your neck, head, and face.',
  },
  {
    icon: ShieldCheck,
    title: 'Waterproof Options',
    desc: 'Satin-lined interior reduces friction and static to prevent breakage.',
  },
  {
    icon: Dog,
    title: 'Dog-Friendly',
    desc: 'Four-way stretch for seamless on-and-off. Designed for every adventure.',
  },
  {
    icon: MapPin,
    title: 'Made in the USA',
    desc: 'Crafted with premium American cotton.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img
                src="https://placehold.co/800x1000/E8DCC8/1a1a1a?text=Lifestyle+Shot"
                alt="Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-10">
                WHY BANDERA
              </h2>
            </ScrollReveal>

            <div className="space-y-8 stagger-children">
              {features.map((f, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <f.icon size={24} strokeWidth={1.5} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-base">{f.title}</h3>
                      <p className="mt-1 text-sm text-primary/70 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
