'use client';

import { useRouter } from 'next/navigation';
import ContactForm from '@/components/checkout/ContactForm';
import ShippingForm from '@/components/checkout/ShippingForm';
import ShippingMethod from '@/components/checkout/ShippingMethod';
import PaymentForm from '@/components/checkout/PaymentForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import SecurityBadges from '@/components/checkout/SecurityBadges';

export default function CheckoutPage() {
  const router = useRouter();

  const handlePlaceOrder = () => {
    router.push('/checkout/confirmation');
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="relative bg-primary grain py-12 md:py-16">
        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <h1 className="font-headline text-warm text-4xl md:text-5xl uppercase tracking-tight">
            CHECKOUT
          </h1>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14">
          <div>
            <ContactForm />
            <ShippingForm />
            <ShippingMethod />
            <PaymentForm />

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-accent text-warm py-4 text-[13px] font-body font-semibold uppercase tracking-[0.1em] hover:bg-accent/90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
            >
              PLACE ORDER
            </button>
            <SecurityBadges />
          </div>

          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
