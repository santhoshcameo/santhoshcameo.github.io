export interface Profile {
  name: string;
  title: string;
  taglines: string[];
  summary: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  googleScholar: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export type PublicationStatus = 'published' | 'under-review' | 'in-progress' | 'award';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: PublicationStatus;
  award?: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  period: string;
  honors?: string;
  thesis?: string;
}

export interface Award {
  id: string;
  title: string;
  description: string;
  year?: string;
  icon: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}
