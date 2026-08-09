export type EducationStatus =
  | "completed"
  | "in-progress"
  | "deferred";

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  status: EducationStatus;
  description: string;
  achievements: string[];
  coursework?: string[];
  thesis?: string;
  gpa?: string;
  location?: string;
  featured: boolean;
}
