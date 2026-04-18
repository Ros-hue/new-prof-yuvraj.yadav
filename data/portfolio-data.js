import {
  Award,
  Blocks,
  BookOpen,
  Briefcase,
  Code2,
  Figma,
  Gamepad2,
  Globe,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
  Workflow
} from "lucide-react";

export const developer = {
  name: "Yuvraj Yadav",
  introName: "Alex Rodriguez",
  title: "Full Stack Developer",
  tagline:
    "Crafting digital experiences with modern technologies. Passionate about creating scalable, user-centric applications that make a difference and unique one.",
  location: "Siraha, Nepal",
  availability: "Open to internships, freelance, and collaborations",
  email: "roshanyy2017@gmail.com",
  phone: "9036942157",
  heroImage: "/projects/pic me.jpeg",
  aboutImage: "/projects/about me.jpeg",
  resume: "/resume1.pdf.pdf"
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Resume" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" }
];

export const highlights = [
  { value: "AI/ML", label: "Undergraduate focus at CIT" },
  { value: "2025", label: "Hackathon and ideathon activity" },
  { value: "3+", label: "Production and academic builds" }
];

export const aboutContent = {
  eyebrow: "About Me",
  title: "Get to know the person behind the code",
  description:
    "Hello! I'm Yuvraj Yadav. An undergraduate student specializing in Artificial Intelligence and Machine Learning at CIT. I’m passionate about exploring cutting-edge technologies, building intelligent systems, and applying machine learning to solve real-world problems.",
  paragraphs: [
    "This portfolio highlights my academic projects, research interests, and technical skills as I continue to grow in the AI/ML field.",
    "Alongside machine learning, I enjoy full stack development and building practical, user-focused products that connect strong engineering with clear interface design."
  ]
};

export const profileTimeline = [
  {
    title: "Computer Science",
    subtitle: "+2 at Arniko Awasiya Secondary School",
    meta: "2022 School life"
  },
  {
    title: "Senior Full Stack Developer",
    subtitle: "Youtube & Coursera",
    meta: "2025 - Present"
  },
  {
    title: "AWS Certified Developer",
    subtitle: "Codigol, Simplilearn, Apana College",
    meta: "2019 - 2022"
  }
];

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layers3,
    items: ["React/Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: Workflow,
    items: ["Node.js/Express", "Python/Django", "PostgreSQL/MongoDB"]
  },
  {
    title: "Tools & Soft Skills",
    icon: Sparkles,
    items: ["AWS/Docker", "Team Leadership", "Problem Solving"]
  },
  {
    title: "Academic Focus",
    icon: Briefcase,
    items: ["Artificial Intelligence", "Machine Learning", "Real-world Applications"]
  }
];

export const orbitSkills = ["React", "Node.js", "Python", "MongoDB", "MySQL", "Docker", "Git"];

export const skillMetrics = [
  { label: "React/Next.js", value: 95, group: "Frontend Development" },
  { label: "TypeScript", value: 90, group: "Frontend Development" },
  { label: "Tailwind CSS", value: 88, group: "Frontend Development" },
  { label: "Node.js/Express", value: 92, group: "Backend Development" },
  { label: "Python/Django", value: 85, group: "Backend Development" },
  { label: "PostgreSQL/MongoDB", value: 80, group: "Backend Development" },
  { label: "AWS/Docker", value: 87, group: "Tools & Soft Skills" },
  { label: "Team Leadership", value: 93, group: "Tools & Soft Skills" },
  { label: "Problem Solving", value: 96, group: "Tools & Soft Skills" }
];

export const projectCards = [
  {
    id: 1,
    title: "Roberon Drone Platform",
    category: "Featured Project",
    image: "/projects/project.png",
    description:
      "A comprehensive drone management platform built with React, Node.js, and MongoDB. Features real-time drone tracking, mission planning, and data analytics. Integrated Stripe for seamless payment processing.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Ros-hue?tab=repositories",
    live: "https://roberon.com/home",
    theme: "from-sky-500/35 via-cyan-400/12 to-transparent"
  },
  {
    id: 2,
    title: "Apex Medical Communications",
    category: "Featured Project",
    image: "/projects/project2.png",
    description:
      "A healthcare communication platform for medical professionals. Built with React and Node.js, featuring secure messaging, appointment scheduling, and telemedicine capabilities.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Ros-hue?tab=repositories",
    live: "https://apexmedcom.in/",
    theme: "from-emerald-500/30 via-teal-400/10 to-transparent"
  },
  {
    id: 3,
    title: "Missing Manual Skills Development Platform",
    category: "Featured Project",
    image: "/projects/project3.png",
    description:
      "A comprehensive guide to missing manual for developers. Built with React and Node.js, featuring secure messaging, appointment scheduling, and telemedicine capabilities.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Ros-hue?tab=repositories",
    live: "https://ros-hue.github.io/Missing_Manual/",
    theme: "from-fuchsia-500/28 via-violet-400/10 to-transparent"
  }
];

export const experienceSummary = {
  title: "Resume & Experience",
  description: "Download my resume or explore my professional journey",
  downloadLabel: "Download Resume (PDF)"
};

export const experiences = [
  {
    year: "2025 - Present",
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    summary:
      "Lead development of enterprise web applications serving 100k+ users. Mentor junior developers and architect scalable solutions using modern tech stack.",
    tags: ["React", "Node.js", "Team Lead"]
  },
  {
    year: "2021 - 2024",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    summary:
      "Built and maintained multiple client projects from conception to deployment. Collaborated closely with the design team to create pixel-perfect user interfaces.",
    tags: ["Vue.js", "Django", "PostgreSQL"]
  },
  {
    year: "2019 - 2020",
    role: "Junior Developer",
    company: "WebAgency Pro",
    summary:
      "Started my professional journey building responsive websites and learning modern development practices. Focused on front-end development and UX.",
    tags: ["HTML/CSS", "JavaScript", "Sass"]
  }
];

export const educationItems = [
  {
    year: "2023",
    title: "Computer Science",
    organization: "Arniko Awasiya Secondary School",
    summary:
      "Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies. Active in coding clubs and hackathons.",
    tags: ["Software Engineering", "Data Structures", "Algorithms"]
  },
  {
    year: "2025",
    title: "React Developer Certification",
    organization: "Coursera, Youtube, Udemy",
    summary:
      "Advanced certification covering React ecosystem, state management, and modern development practices.",
    tags: ["React", "Redux", "Next.js"]
  }
];

export const achievements = [
  "Won 2nd place in National Hackathon 2022",
  "Maintained 4.9/5 client satisfaction rating",
  "Mentored 15+ junior developers",
  "100+ open source contributions"
];

export const blogPosts = [
  {
    id: 1,
    title: "hackethon 2024",
    subtitle: "PITCHING",
    excerpt: "2th of the hackethon with team",
    image: "/projects/hackthon1.png",
    category: "hackethon 2024",
    readTime: "24 hrs",
    date: "Dec 15, 2024",
    author: "Yuvraj Yadav"
  },
  {
    id: 2,
    title: "hackethon 2024",
    subtitle: "HTML,CSS,JS,php",
    excerpt: "winner of the hackethon with team",
    image: "/projects/hackthon2.png",
    category: "hackethon 2024",
    readTime: "21 hrs",
    date: "Dec 15, 2024",
    author: "Yuvraj Yadav"
  },
  {
    id: 3,
    title: "Ideathon 2025",
    subtitle: "React",
    excerpt: "participation of the ideathon with team",
    image: "/projects/ideathon.png",
    category: "Ideathon 2025",
    readTime: "15 hrs",
    date: "Sep 25, 2025",
    author: "Yuvraj Yadav"
  }
];

export const contactDetails = [
  { label: "Email", value: "roshanyy2017@gmail.com", href: "mailto:roshanyy2017@gmail.com", icon: Mail },
  { label: "Phone", value: "9036942157", href: "tel:9036942157", icon: Phone },
  { label: "Location", value: "Siraha,Nepal", href: null, icon: MapPin }
];

export const toolkit = [
  { label: "Computer Science", icon: GraduationCap },
  { label: "AI/ML Learning", icon: Blocks },
  { label: "Full Stack Builds", icon: Globe },
  { label: "Project Thinking", icon: Figma },
  { label: "Problem Solving", icon: Gamepad2 }
];

export const resumeHighlights = [
  { label: "Work Experience", icon: Briefcase },
  { label: "Education & Certifications", icon: BookOpen },
  { label: "Key Achievements", icon: Trophy },
  { label: "Growth Path", icon: Award },
  { label: "Technical Practice", icon: Code2 }
];
