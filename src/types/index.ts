export type { Profile, SocialLink, ProfileTitle } from "./profile";
export type { Experience } from "./experience";
export type {
  Project,
  ProjectCategory,
  ProjectStatus,
} from "./project";
export type {
  Publication,
  PublicationType,
  PublicationStatus,
} from "./research";
export type { TeachingExperience, TeachingSubject } from "./teaching";
export type { Certification } from "./certification";
export type { Achievement, AchievementCategory } from "./achievement";
export type { Education, EducationStatus } from "./education";
export type { Award } from "./award";
export type { Conference, ConferenceRole } from "./conference";

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  icon: string;
  dynamic?: boolean;
}
