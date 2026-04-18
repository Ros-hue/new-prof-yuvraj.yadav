"use client";

import { motion } from "framer-motion";
import { orbitSkills, skillCategories, skillMetrics } from "@/data/portfolio-data";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-anchor px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="story-panel flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Skills"
            title="Skills & Expertise"
            description="Technologies and tools I work with to bring ideas to life."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <GlassCard className="story-panel flex min-h-[420px] items-center justify-center overflow-hidden p-6">
            <div className="relative h-[320px] w-[320px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 26, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[var(--line)]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
                className="absolute inset-[18%] rounded-full border border-white/10"
              />
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(89,208,255,0.25),rgba(7,13,26,0.95))] font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-white shadow-[0_0_40px_rgba(89,208,255,0.2)]">
                Stack
              </div>
              {orbitSkills.map((skill, index) => {
                const angle = (index / orbitSkills.length) * Math.PI * 2;
                const radius = index % 2 === 0 ? 148 : 104;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="absolute left-1/2 top-1/2 rounded-full border border-white/10 bg-[var(--panel-strong)] px-3 py-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>

          <div className="grid gap-4">
            <GlassCard className="story-panel p-6">
              <p className="text-sm uppercase tracking-[0.26em] text-[var(--accent)]">Skill Levels</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {skillMetrics.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-white">{item.label}</span>
                      <span className="text-[var(--muted)]">{item.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-3))]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="grid gap-4 md:grid-cols-2">
              {skillCategories.map((group) => {
                const Icon = group.icon;
                return (
                  <GlassCard key={group.title} className="story-panel p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[var(--accent)]">
                        <Icon size={20} />
                      </span>
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
