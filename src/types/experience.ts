export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  featured: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  companyUrl?: string;
  icon?: string;
}
