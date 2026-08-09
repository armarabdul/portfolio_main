export type PublicationType =
  | "journal"
  | "conference"
  | "preprint"
  | "thesis"
  | "book-chapter"
  | "technical-report";

export type PublicationStatus =
  | "published"
  | "under-review"
  | "in-progress"
  | "accepted"
  | "preprint";

export interface Publication {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  year?: number;
  type: PublicationType;
  venue?: string;
  status: PublicationStatus;
  featured: boolean;
  abstract: string;
  keywords: string[];
  researchAreas: string[];
  technologies: string[];
  pdfUrl?: string;
  doiUrl?: string;
  externalUrl?: string;
  citation?: string;
}
