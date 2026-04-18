import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/portfolio-data";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

export default function BlogSection() {
  return (
    <section id="blog" className="section-anchor px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="story-panel flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Blog"
            title="Latest Blog Posts"
            description="Thoughts on development, technology trends, and lessons learned."
          />

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
            View All Posts
            <ArrowRight size={16} />
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <GlassCard key={post.id} className="story-panel overflow-hidden p-0">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
              </div>

              <div className="space-y-5 p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  <span>{post.subtitle}</span>
                  <span>{post.readTime}</span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">{post.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 font-[family-name:var(--font-display)] text-sm text-white">
                      YV
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{post.author}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{post.date}</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-[var(--accent)]" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
