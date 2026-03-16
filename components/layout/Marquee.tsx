export default function Marquee({
  text,
  className = '',
  speed = 30,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const items = `${text} `.repeat(12);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="inline-block px-2 text-[11px] font-body uppercase tracking-[0.12em]">
          {items}
        </span>
        <span className="inline-block px-2 text-[11px] font-body uppercase tracking-[0.12em]">
          {items}
        </span>
      </div>
    </div>
  );
}
