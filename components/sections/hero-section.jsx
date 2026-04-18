"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { developer, highlights } from "@/data/portfolio-data";
import GlassCard from "@/components/ui/glass-card";

export default function HeroSection({ onOpenProjects }) {
  return (
    <section id="hero" className="section-anchor relative min-h-screen px-4 pb-18 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="story-panel space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--accent)]"
          >
            <Sparkles size={14} />
            Full stack portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3.45 }}
            className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] text-white md:text-7xl xl:text-[7rem]"
          >
            {developer.introName}
            <br />
            <span className="text-gradient">{developer.name}</span>
            <br />
            {developer.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 3.6 }}
            className="max-w-2xl text-lg leading-8 text-[var(--muted)]"
          >
            {developer.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 3.75 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(89,208,255,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <button
              type="button"
              onClick={onOpenProjects}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={16} />
            </button>
            <a
              href={developer.resume}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-[var(--muted)] transition hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <Download size={16} />
            </a>
          </motion.div>

          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <GlassCard key={item.label} className="story-panel p-5">
                <p className="font-[family-name:var(--font-display)] text-2xl text-white md:text-3xl">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="story-panel">
          <GlassCard className="relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(89,208,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(124,92,255,0.18),transparent_20%)]" />
            <div className="relative space-y-6">
              <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-black/20 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-[var(--muted)]">Current role</p>
                  <p className="mt-1 font-semibold text-white">{developer.title}</p>
                </div>
                <span className="rounded-full bg-emerald-400/18 px-3 py-2 text-xs uppercase tracking-[0.22em] text-emerald-300">
                  {developer.availability}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-4 sm:col-span-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10">
                    <Image
                      src={developer.heroImage}
                      alt={developer.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[var(--panel-strong)] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--accent-2)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--accent-3)]" />
                </div>
                <div className="space-y-3 font-mono text-sm text-[var(--muted)]">
                  <p>student.focus&#40;"Artificial Intelligence and Machine Learning"&#41;;</p>
                  <p>builder.stack&#40;"full stack", "user-centric products"&#41;;</p>
                  <p>portfolio.goal&#40;"real-world impact through code"&#41;;</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
