"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={onToggle}
      className="glass-panel relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full text-[var(--foreground)] transition-transform duration-300 hover:scale-105"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -40, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.5 }}
          transition={{ duration: 0.25 }}
        >
          {theme === "dark" ? <MoonStar size={18} /> : <SunMedium size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
