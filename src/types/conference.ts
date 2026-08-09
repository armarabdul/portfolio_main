export type ConferenceRole =
  | "speaker"
  | "presenter"
  | "panelist"
  | "attendee"
  | "organizer"
  | "reviewer"
  | "workshop-leader";

export interface Conference {
  id: string;
  title: string;
  role: ConferenceRole;
  venue: string;
  location: string;
  date: string;
  description: string;
  presentationTitle?: string;
  url?: string;
  featured: boolean;
}
