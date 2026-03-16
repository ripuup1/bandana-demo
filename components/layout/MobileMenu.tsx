'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Dog Collection', href: '/dog-collection' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Uses', href: '/uses' },
  { label: 'Cart', href: '/cart' },
];

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-primary">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-warm" aria-label="Close menu">
          <X size={28} strokeWidth={1.5} />
        </button>
      </div>
      <nav className="flex flex-col items-center gap-1 mt-12">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-warm font-headline text-4xl uppercase tracking-wider py-4 hover:text-accent transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
