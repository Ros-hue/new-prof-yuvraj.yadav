"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { developer, navItems } from "@/data/portfolio-data";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Navbar({ activeSection, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={() => navigate("hero")}
          className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.35em] text-white"
        >
          {developer.name}
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className="relative rounded-full px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:text-white"
              >
                {active ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-white/8"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                ) : null}
                <span className={`relative ${active ? "text-white" : ""}`}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="glass-panel flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-label="Toggle mobile navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="glass-panel mx-auto mt-3 max-w-7xl rounded-[28px] p-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className="rounded-2xl border border-white/5 px-4 py-3 text-left text-sm text-[var(--muted)] transition hover:border-[var(--line)] hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
