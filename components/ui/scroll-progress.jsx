"use client";

export default function ScrollProgress({ progress }) {
  return (
    <div className="fixed right-4 top-1/2 z-40 hidden h-40 w-1 -translate-y-1/2 rounded-full bg-white/10 md:block">
      <span
        className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)] transition-[height] duration-150"
        style={{ height: `${Math.max(progress * 100, 6)}%` }}
      />
    </div>
  );
}
