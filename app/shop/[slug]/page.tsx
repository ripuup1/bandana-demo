'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Star, Truck } from 'lucide-react';
import { getProductBySlug } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/Toast';
import { formatCurrency } from '@/lib/utils';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ColorSelector from '@/components/shop/ColorSelector';
import SizeSelector from '@/components/shop/SizeSelector';
import QuantitySelector from '@/components/shop/QuantitySelector';
import ProductAccordion from '@/components/shop/ProductAccordion';
import RelatedProducts from '@/components/shop/RelatedProducts';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const { addToCart } = useCart();
  const { showToast } = useToast();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-headline text-3xl uppercase">Product Not Found</h1>
        <p className="mt-4 text-primary/60 font-body">This product doesn&apos;t exist.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      quantity,
      color: selectedColor,
      size: selectedSize,
      image: product.images[0],
    });
    showToast(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      quantity,
      color: selectedColor,
      size: selectedSize,
      image: product.images[0],
    });
    router.push('/checkout');
  };

  const accordionItems = [
    { title: 'Details & Materials', content: product.materials },
    { title: 'Shipping & Returns', content: 'Ships in 2-3 business days. Free shipping on orders over $50. Free returns within 30 days — no questions asked.' },
    { title: 'Care Instructions', content: product.careInstructions },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.name },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-8 lg:gap-14 mt-4 pb-16">
          {/* Images */}
          <div>
            <div className="aspect-square overflow-hidden bg-secondary/30">
              <img
                src={product.images[mainImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 mt-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-all duration-200 ${
                    mainImage === i ? 'border-accent' : 'border-transparent hover:border-primary/20'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight">
              {product.name}
            </h1>
            <p className="mt-3 text-2xl font-body font-bold text-accent">
              {formatCurrency(product.price)}
            </p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    strokeWidth={1.5}
                    className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-primary/20'}
                  />
                ))}
              </div>
              <span className="text-sm text-primary/50 font-body">{product.reviewCount} reviews</span>
            </div>

            <p className="mt-6 text-base text-primary/70 leading-relaxed font-body">
              {product.longDescription}
            </p>

            <div className="mt-8 space-y-6">
              <ColorSelector
                colors={product.colors}
                selected={selectedColor}
                onChange={setSelectedColor}
              />

              <SizeSelector
                sizes={product.sizes}
                selected={selectedSize}
                onChange={setSelectedSize}
              />

              <div>
                <p className="text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-primary/60 mb-3">
                  Quantity
                </p>
                <QuantitySelector quantity={quantity} onChange={setQuantity} />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-accent text-warm py-4 text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-accent/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
              >
                ADD TO CART
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full border border-primary text-primary py-4 text-[12px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-primary hover:text-warm transition-all duration-200"
              >
                BUY IT NOW
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-primary/60 font-body">
              <Truck size={18} strokeWidth={1.5} />
              <span>Free shipping on orders over $50</span>
            </div>

            <div className="mt-8">
              <ProductAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentSlug={slug} />
    </div>
  );
}
