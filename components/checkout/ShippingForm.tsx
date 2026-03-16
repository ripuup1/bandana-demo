'use client';

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
  'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
  'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

export default function ShippingForm() {
  return (
    <div className="mb-10">
      <h2 className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-primary/50 mb-6">
        Shipping Address
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
          />
        </div>
        <input
          type="text"
          placeholder="Address line 1"
          className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
        />
        <input
          type="text"
          placeholder="Address line 2 (optional)"
          className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
          />
          <select
            defaultValue=""
            className="w-full h-12 px-4 border border-primary/15 font-body text-sm text-primary bg-white focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200 appearance-none"
          >
            <option value="" disabled>State</option>
            {US_STATES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="ZIP code"
            className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200 col-span-2 md:col-span-1"
          />
        </div>
        <input
          type="text"
          value="United States"
          disabled
          className="w-full h-12 px-4 border border-primary/10 font-body text-sm text-primary/40 bg-primary/5"
        />
      </div>
    </div>
  );
}
