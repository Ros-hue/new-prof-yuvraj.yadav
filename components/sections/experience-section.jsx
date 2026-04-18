import {
  achievements,
  developer,
  educationItems,
  experienceSummary,
  experiences,
  resumeHighlights
} from "@/data/portfolio-data";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-anchor px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="story-panel flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title={experienceSummary.title}
            description={experienceSummary.description}
          />

          <a
            href={developer.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950"
          >
            {experienceSummary.downloadLabel}
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {resumeHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.label} className="story-panel p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[var(--accent)]">
                    <Icon size={18} />
                  </span>
                  <p className="text-sm uppercase tracking-[0.18em] text-white">{item.label}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="story-panel">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Work Experience</p>
              <div className="relative ml-4 border-l border-[var(--line)] pl-8 md:ml-6 md:pl-10">
                {experiences.map((item) => (
                  <div key={`${item.year}-${item.role}`} className="relative pb-8 last:pb-0">
                    <span className="absolute -left-[2.55rem] top-3 h-4 w-4 rounded-full border border-[var(--line)] bg-[var(--accent)] shadow-[0_0_25px_rgba(89,208,255,0.5)] md:-left-[2.95rem]" />
                    <GlassCard className="p-6 md:p-8">
                      <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.16em] text-[var(--accent)]">
                        {item.year}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{item.company}</p>
                      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="story-panel">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent-3)]">Education & Certifications</p>
              <div className="space-y-4">
                {educationItems.map((item) => (
                  <GlassCard key={`${item.year}-${item.title}`} className="p-6">
                    <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.16em] text-[var(--accent)]">
                      {item.year}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">{item.organization}</p>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <GlassCard className="story-panel p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Key Achievements</p>
              <div className="mt-5 grid gap-3">
                {achievements.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[var(--muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
