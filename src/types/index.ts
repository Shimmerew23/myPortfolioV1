export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  image?: string;
  isNda: boolean;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  label: string;
  accent: string;
  accentRgb: [number, number, number];
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface JourneyItem {
  year: string;
  role: string;
  org?: string;
  description: string;
  type: "work" | "education";
  active?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
