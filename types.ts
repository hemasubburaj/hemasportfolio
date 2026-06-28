export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  period: string;
  tech: string[];
  bullets: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  category: 'live' | 'web' | 'ai' | 'design';
  isLive?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}
