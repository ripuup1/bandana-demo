import Link from 'next/link';
import { Instagram, Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-warm/70 font-body">
      <div className="max-w-site mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <Link href="/" className="font-headline text-warm text-2xl uppercase tracking-[0.08em]">
              BANDERA
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Built for everything. Performance bandanas for humans, dogs, and every adventure in between.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] text-warm font-semibold mb-4">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="hover:text-warm transition-colors duration-200">All Products</Link></li>
              <li><Link href="/dog-collection" className="hover:text-warm transition-colors duration-200">Dog Collection</Link></li>
              <li><Link href="/shop/the-adventure-pack" className="hover:text-warm transition-colors duration-200">Bundles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] text-warm font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/our-story" className="hover:text-warm transition-colors duration-200">Our Story</Link></li>
              <li><Link href="/uses" className="hover:text-warm transition-colors duration-200">1000 Uses</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] text-warm font-semibold mb-4">Social</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-warm transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-warm transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-warm transition-colors duration-200" aria-label="TikTok">
                <ExternalLink size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; 2026 BANDERA. Built for everything.</p>
          <p className="text-warm/40">This is a demo site — not a live store.</p>
        </div>
      </div>
    </footer>
  );
}
