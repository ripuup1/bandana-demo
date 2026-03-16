import { Lock, ShieldCheck, RotateCcw } from 'lucide-react';

const badges = [
  { icon: Lock, label: 'Secure checkout' },
  { icon: ShieldCheck, label: '256-bit SSL encryption' },
  { icon: RotateCcw, label: '30-day returns' },
];

export default function SecurityBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
      {badges.map((b, i) => (
        <div key={i} className="flex items-center gap-2 text-primary/40">
          <b.icon size={16} strokeWidth={1.5} />
          <span className="text-[11px] font-body uppercase tracking-[0.08em]">{b.label}</span>
        </div>
      ))}
    </div>
  );
}
