'use client';

export default function ContactForm() {
  return (
    <div className="mb-10">
      <h2 className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-primary/50 mb-6">
        Contact Information
      </h2>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full h-12 px-4 border border-primary/15 font-body text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(212,98,43,0.15)] transition-all duration-200"
        />
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="custom-checkbox" />
          <span className="text-sm font-body text-primary/70">Email me with news and offers</span>
        </label>
      </div>
    </div>
  );
}
