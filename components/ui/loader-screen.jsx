"use client";

import { motion } from "framer-motion";

export default function LoaderScreen({ name, codeLine, loaded }) {
  const letters = name.split("");

  return (
    <motion.div
      initial={false}
      animate={loaded ? { opacity: 0, pointerEvents: "none" } : { opacity: 1, pointerEvents: "auto" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#02040b]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(89,208,255,0.18),transparent_28%),radial-gradient(circle_at_30%_30%,rgba(124,92,255,0.18),transparent_26%)]" />
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            initial={{
              x: `${(index * 83) % 100}%`,
              y: `${(index * 47) % 100}%`,
              opacity: 0
            }}
            animate={{ y: ["0%", "-24%", "0%"], opacity: [0.1, 0.9, 0.1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 + (index % 6), delay: index * 0.05 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.6em] text-[var(--accent)]">
          Booting interface
        </p>

        <div className="flex flex-wrap justify-center gap-1 text-4xl font-semibold uppercase md:text-7xl">
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
              className={letter === " " ? "w-3" : "text-gradient"}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className="glass-panel w-full max-w-2xl rounded-[28px] p-5 text-left">
          <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            console.stream
          </p>
          <p className="mt-4 min-h-14 text-sm leading-7 text-[var(--accent)] md:text-base">
            {codeLine}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[var(--accent)] align-middle" />
          </p>
        </div>
      </div>
    </motion.div>
  );
}
