export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  category: string;
  description: string;
  iconName: "Code" | "Briefcase" | "GraduationCap" | "Brain" | "Link" | "BookOpen";
}
