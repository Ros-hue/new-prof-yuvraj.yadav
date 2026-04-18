"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { contactDetails } from "@/data/portfolio-data";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

const initialState = { name: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("success");
      setFeedback(data.message);
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message);
    }
  };

  return (
    <section id="contact" className="section-anchor px-4 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="story-panel space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            description="Have a project in mind or want to collaborate? I'd love to hear from you."
          />

          <div className="space-y-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              const content = (
                <GlassCard className="p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-[var(--accent)]">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-sm text-[var(--muted)]">{item.label}</p>
                      <p className="mt-1 block text-lg font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                </GlassCard>
              );

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>

        <GlassCard className="story-panel p-6 md:p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            {[
              { label: "Name *", name: "name", type: "text" },
              { label: "Email *", name: "email", type: "email" },
              { label: "Subject", name: "subject", type: "text" }
            ].map((field) => (
              <label key={field.name} className="block space-y-2">
                <span className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">{field.label}</span>
                <input
                  required={field.name !== "subject"}
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={onChange}
                  className="w-full rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_4px_rgba(89,208,255,0.12)]"
                />
              </label>
            ))}

            <label className="block space-y-2">
              <span className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">Message *</span>
              <textarea
                required
                name="message"
                rows={6}
                value={form.message}
                onChange={onChange}
                placeholder="Enter Your Message"
                className="w-full rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_4px_rgba(89,208,255,0.12)]"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 disabled:opacity-70"
              >
                {status === "success" ? <CheckCircle2 size={18} /> : <Send size={18} />}
                {status === "loading" ? "Sending..." : status === "success" ? "Sent" : "Send Message"}
              </button>

              {feedback ? (
                <p className={`text-sm ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}>{feedback}</p>
              ) : null}
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
