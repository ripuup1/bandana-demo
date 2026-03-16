import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Features from '@/components/home/Features';
import DryShield from '@/components/home/DryShield';
import DogTeaser from '@/components/home/DogTeaser';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Features />
      <DryShield />
      <DogTeaser />
      <Testimonials />
      <Newsletter />
    </>
  );
}
