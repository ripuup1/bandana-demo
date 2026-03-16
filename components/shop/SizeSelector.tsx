'use client';

export default function SizeSelector({
  sizes,
  selected,
  onChange,
}: {
  sizes: string[];
  selected: string;
  onChange: (size: string) => void;
}) {
  return (
    <div>
      <p className="text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-primary/60 mb-3">
        Size
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map(s => (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={`px-4 py-2.5 text-[12px] font-body font-medium border transition-all duration-200 ${
              selected === s
                ? 'border-accent bg-accent/5 text-accent'
                : 'border-primary/15 text-primary/70 hover:border-primary/40'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
