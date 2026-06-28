import { Project, SkillCategory, Education, Certificate } from './types';

export const PERSONAL_INFO = {
  name: "Hema Subburaj",
  shortName: "Hema S",
  title: "Full-Stack & AI Software Engineer",
  email: "hemasubburaj396@gmail.com",
  phone: "+91 73970 90432",
  location: "Sivakasi, Tamil Nadu",
  country: "India",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  bio: "Computer Science Engineering student & developer specializing in AI-driven automation, full-stack web architectures, and engaging UI/UX design systems."
};

export const EDUCATION: Education[] = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "PSR Engineering College",
    period: "Sep 2024 – Present",
    status: "Currently Pursuing"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript"]
  },
  {
    title: "Frontend & UI",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"]
  },
  {
    title: "Backend Frameworks",
    skills: ["Node.js", "Express.js"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "UI/UX & Design",
    skills: ["Figma", "Adobe Developer", "Wireframing", "Prototyping"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["GitHub", "Git", "Vercel", "Railway"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-site",
    number: "01",
    title: "Ecommerce Platform",
    subtitle: "Full-Stack Web Application",
    period: "Jan 2026 – Mar 2026",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
    bullets: [
      "Developed comprehensive e-commerce web application with product browsing, order placement, and secure billing.",
      "Implemented and crafted an engaging, high-conversion UI/UX using React.js and Tailwind CSS.",
      "Integrated Nodemailer to automate bill streamlining and instant confirmation emails, enhancing customer experience."
    ],
    featured: true,
    githubUrl: "https://github.com/hemasubburaj",
    liveUrl: "https://ecommerce-hemas.vercel.app",
    category: "live",
    isLive: true
  },
  {
    id: "easyhouse",
    number: "02",
    title: "Easyhouse Rentals",
    subtitle: "Live House Rentals Portal",
    period: "Jun 2025 – Aug 2025",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Material-UI", "NodeMailer"],
    bullets: [
      "Crafted a modern house rentals application featuring secure role-based user authentication.",
      "Integrated NodeMailer for automated email notifications triggered by user booking inquiries.",
      "Developed responsive frontend with React.js & Material-UI paired with a robust Express.js & MySQL backend."
    ],
    featured: true,
    githubUrl: "https://github.com/hemasubburaj",
    liveUrl: "https://easyhouse-rentals.railway.app",
    category: "live",
    isLive: true
  },
  {
    id: "taskpulse-ai",
    number: "03",
    title: "TaskPulse AI Tracker",
    subtitle: "Live Productivity Dashboard",
    period: "Nov 2025 – Dec 2025",
    tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "AI Analytics"],
    bullets: [
      "Built a live production workspace tracker deployed on Railway cloud infrastructure.",
      "Features real-time task categorizations and daily productivity insights powered by automated heuristics.",
      "Designed clean desktop-first bento grid layout with sub-second responsive transitions."
    ],
    featured: true,
    githubUrl: "https://github.com/hemasubburaj",
    liveUrl: "https://taskpulse-ai.railway.app",
    category: "live",
    isLive: true
  },
  {
    id: "ai-disabled-car",
    number: "04",
    title: "AI-Driven Car System",
    subtitle: "Assistive Mobility System",
    period: "May 2025",
    tech: ["Python", "JavaScript", "AI Automation", "IoT Concept"],
    bullets: [
      "Designed an AI-driven car control system to assist disabled individuals with safer and effortless mobility.",
      "Implemented intelligent automation algorithms for real-time navigation and decision-making assistance.",
      "Focused on accessibility design principles and intuitive user-friendly controls to support independent transportation."
    ],
    featured: true,
    githubUrl: "https://github.com/hemasubburaj",
    category: "ai"
  },
  {
    id: "ai-air-purifier",
    number: "05",
    title: "AI Smart Air Purifier",
    subtitle: "Real-time Alert & Control IoT",
    period: "Apr 2025",
    tech: ["Python", "JavaScript", "Data Analytics"],
    bullets: [
      "Built a smart air purifier software architecture for real-time indoor air quality monitoring and automated control.",
      "Used Python and JavaScript to continuously analyze sensor data streams and trigger instant alerts when quality drops.",
      "Implemented automated feedback control loops to dynamically adjust purification levels, maximizing indoor air efficiency."
    ],
    featured: false,
    githubUrl: "https://github.com/hemasubburaj",
    liveUrl: "https://smart-purifier-iot.vercel.app",
    category: "ai",
    isLive: true
  },
  {
    id: "elara-logo-system",
    number: "06",
    title: "Elara Tech Identity",
    subtitle: "Kinetic Logo & Brand System",
    period: "Feb 2026",
    tech: ["Figma", "Adobe Developer", "Vector Graphics", "Typography"],
    bullets: [
      "Created a complete brand identity and kinetic logo mark for Elara AI Architecture Studio.",
      "Designed custom brutalist geometric letterforms paired with high-contrast neon yellow color accents.",
      "Delivered comprehensive Figma design tokens, icon packs, and social media brand guidelines."
    ],
    featured: true,
    liveUrl: "https://figma.com/@hemasubburaj",
    category: "design"
  },
  {
    id: "zenith-eco-mark",
    number: "07",
    title: "Zenith Brand Identity",
    subtitle: "Minimalist Logo Design",
    period: "Dec 2025",
    tech: ["Figma", "Adobe Illustrator", "Brand Strategy", "UI Guidelines"],
    bullets: [
      "Crafted a minimalist vector logo mark for Zenith Sustainable Cloud Solutions.",
      "Focused on golden ratio geometry and clean negative space to symbolize infinite renewable energy.",
      "Structured UI kit and component library ready for instant handoff to frontend engineering teams."
    ],
    featured: true,
    liveUrl: "https://figma.com/@hemasubburaj",
    category: "design"
  },
  {
    id: "aura-ui-system",
    number: "08",
    title: "Aura UI Design System",
    subtitle: "Figma Component & Logo Kit",
    period: "Oct 2025",
    tech: ["Figma", "Design Tokens", "Wireframing", "Prototyping"],
    bullets: [
      "Architected an enterprise-grade Figma UI design system featuring 150+ responsive components.",
      "Incorporated accessibility WCAG AAA contrast standards and automated dark/light mode token switching.",
      "Included custom vector logo badges and iconography for seamless mobile and web deployment."
    ],
    featured: true,
    liveUrl: "https://figma.com/@hemasubburaj",
    category: "design"
  },
  {
    id: "vortex-monogram",
    number: "09",
    title: "Vortex Monogram",
    subtitle: "Geometric Logo Design",
    period: "Sep 2025",
    tech: ["Adobe Developer", "Vector Art", "Branding", "Layout"],
    bullets: [
      "Designed an interlocking 3D geometric monogram logo for Vortex NextGen Software Labs.",
      "Emphasized depth and optical illusions using flat two-tone color palettes.",
      "Featured in student showcase for modern digital typography and brand mark craftsmanship."
    ],
    featured: false,
    liveUrl: "https://figma.com/@hemasubburaj",
    category: "design"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Web Development Certified Course",
    issuer: "Unified Mentor Private Limited",
    date: "April 2025"
  },
  {
    title: "TNWISE HACKATHON Finalist / Participant",
    issuer: "TNWISE Innovation",
    date: "11th April 2025"
  }
];
