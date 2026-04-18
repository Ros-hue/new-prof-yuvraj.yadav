"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { developer, navItems } from "@/data/portfolio-data";
import { getGsap } from "@/animations/gsap";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMounted } from "@/hooks/use-mounted";
import CustomCursor from "@/components/ui/custom-cursor";
import LoaderScreen from "@/components/ui/loader-screen";
import Navbar from "@/components/ui/navbar";
import ProjectModal from "@/components/ui/project-modal";
import RippleLayer from "@/components/ui/ripple-layer";
import ScrollProgress from "@/components/ui/scroll-progress";
import AboutSection from "@/components/sections/about-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

const codeSequence = [
  "const profile = init({ author: 'Yuvraj Yadav', focus: 'AI/ML' });",
  "skills.load(['React', 'Node.js', 'Python', 'MongoDB']);",
  "projects.render({ type: 'full-stack', style: 'clean-ui' });",
  "portfolio.launch({ mode: 'production', status: 'ready' });"
];

export default function PortfolioExperience() {
  const mounted = useMounted();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [theme, setTheme] = useState("dark");
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const shellRef = useRef(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const nextTheme = savedTheme || "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.body.style.overflow = loaded ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loaded]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setLoaded(true), 3600);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const sequence = codeSequence[codeIndex % codeSequence.length];
    let index = 0;
    setTypedCode("");

    const intervalId = window.setInterval(() => {
      index += 1;
      setTypedCode(sequence.slice(0, index));

      if (index >= sequence.length) {
        window.clearInterval(intervalId);
        window.setTimeout(() => setCodeIndex((value) => value + 1), 700);
      }
    }, 34);

    return () => window.clearInterval(intervalId);
  }, [codeIndex]);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted) {
      return undefined;
    }

    const { ScrollTrigger } = getGsap();
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setProgress(self.progress)
    });

    return () => trigger.kill();
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !shellRef.current) {
      return undefined;
    }

    const { gsap } = getGsap();
    const panels = shellRef.current.querySelectorAll(".story-panel");
    const ctx = gsap.context(() => {
      panels.forEach((panel) => {
        gsap.to(panel, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 82%"
          }
        });
      });
    }, shellRef);

    return () => ctx.revert();
  }, [mounted]);

  const sceneProgress = useMemo(() => (loaded ? progress : 0), [loaded, progress]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <>
      <LoaderScreen name={developer.name} codeLine={typedCode} loaded={loaded} />
      <CustomCursor />
      <RippleLayer />
      <ScrollProgress progress={progress} />
      <div className="grid-shell" />
      <div className="noise-overlay" />

      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <div className="fixed inset-0 z-0">
        {mounted && !isMobile ? (
          <Scene progress={sceneProgress} introComplete={loaded} />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_20%,rgba(89,208,255,0.18),transparent_24%),radial-gradient(circle_at_70%_30%,rgba(124,92,255,0.2),transparent_20%),linear-gradient(180deg,transparent,rgba(3,6,18,0.9))]" />
        )}
      </div>

      <main ref={shellRef} className="relative z-10">
        <HeroSection onOpenProjects={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
