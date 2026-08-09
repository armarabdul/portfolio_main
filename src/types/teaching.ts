export interface TeachingSubject {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface TeachingExperience {
  id: string;
  institution: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  subjects: TeachingSubject[];
  responsibilities: string[];
  achievements: string[];
}
