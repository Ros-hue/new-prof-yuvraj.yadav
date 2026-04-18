"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projectCards } from "@/data/portfolio-data";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="section-anchor px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="story-panel">
          <SectionHeading
            eyebrow="Projects"
            title="Featured Projects"
            description="A showcase of my recent work and side projects."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projectCards.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ rotateX: -6, rotateY: 6, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="story-panel h-full [transform-style:preserve-3d]"
            >
              <GlassCard className="project-card-shell group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.theme}`} />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/80 backdrop-blur-md">
                    Featured Work
                  </div>
                </div>

                <div className="flex flex-1 flex-col space-y-5 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{project.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>

                  <p className="min-h-[84px] text-sm leading-7 text-[var(--muted)]">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_32px_rgba(89,208,255,0.22)]"
                    >
                      View Details
                      <ArrowUpRight size={16} />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white"
                    >
                      Code
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
