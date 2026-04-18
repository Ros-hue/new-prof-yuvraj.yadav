export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.5em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p>
    </div>
  );
}
