export type ProjectCategory =
  | "professional"
  | "research"
  | "academic"
  | "web"
  | "ai-ml"
  | "blockchain"
  | "mobile"
  | "iot"
  | "other";

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "maintained"
  | "archived";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  status: ProjectStatus;
  startDate: string;
  endDate?: string;
  technologies: string[];
  features: string[];
  responsibilities: string[];
  challenges: string[];
  results: string[];
  problemStatement?: string;
  objectives?: string[];
  solution?: string;
  architecture?: string;
  implementation?: string;
  futureEnhancements?: string[];
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  researchUrl?: string;
  screenshots: string[];
  thumbnail?: string;
}
