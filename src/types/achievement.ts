export type AchievementCategory =
  | "research"
  | "teaching"
  | "development"
  | "academic"
  | "professional"
  | "community"
  | "other";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  category: AchievementCategory;
  organization?: string;
  url?: string;
  featured: boolean;
}
