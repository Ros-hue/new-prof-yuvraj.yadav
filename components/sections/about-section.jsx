import Image from "next/image";
import { toolkit } from "@/data/portfolio-data";
import { aboutContent, developer, profileTimeline } from "@/data/portfolio-data";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutSection() {
  return (
    <section id="about" className="section-anchor px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="story-panel">
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.description}
          />
        </div>

        <GlassCard className="story-panel p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
                <Image
                  src={developer.aboutImage}
                  alt={developer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              </div>
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-lg leading-8 text-[var(--muted)]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-3">
              {profileTimeline.map((item) => (
                <div
                  key={`${item.title}-${item.meta}`}
                  className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 transition hover:border-[var(--line)] hover:bg-white/8"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.subtitle}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">{item.meta}</p>
                </div>
              ))}
              {toolkit.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 transition hover:border-[var(--line)] hover:bg-white/8"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[var(--accent)]">
                        <Icon size={18} />
                      </span>
                      <p className="text-sm uppercase tracking-[0.18em] text-white">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
