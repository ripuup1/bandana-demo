'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          showSolid
            ? 'bg-primary/95 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-site mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-headline text-warm text-2xl md:text-3xl uppercase tracking-[0.08em]">
            BANDERA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Shop', href: '/shop' },
              { label: 'Our Story', href: '/our-story' },
              { label: 'Dog Collection', href: '/dog-collection' },
              { label: 'Uses', href: '/uses' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-body uppercase tracking-[0.1em] transition-colors duration-200 ${
                  pathname === link.href ? 'text-accent' : 'text-warm/80 hover:text-warm'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link href="/cart" className="relative text-warm hover:text-accent transition-colors duration-200">
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-body font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-warm"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
