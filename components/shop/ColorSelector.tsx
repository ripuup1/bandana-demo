'use client';

export default function ColorSelector({
  colors,
  selected,
  onChange,
}: {
  colors: { name: string; hex: string }[];
  selected: string;
  onChange: (name: string) => void;
}) {
  return (
    <div>
      <p className="text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-primary/60 mb-3">
        Color — {selected}
      </p>
      <div className="flex gap-3">
        {colors.map(c => (
          <button
            key={c.name}
            onClick={() => onChange(c.name)}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
              selected === c.name ? 'border-accent scale-110' : 'border-transparent hover:scale-105'
            }`}
            style={{ backgroundColor: c.hex }}
            aria-label={c.name}
            title={c.name}
          />
        ))}
      </div>
    </div>
  );
}
