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

export interface ExperimentalResult {
  label: string;
  value: string;
}

export interface AuthorDetail {
  name: string;
  department?: string;
  institution?: string;
  city?: string;
  country?: string;
  email?: string;
}

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
  framework?: string;
  institution?: string;
  department?: string;
  datasetSummary?: string;
  methodologySteps?: string[];
  mitigationTiers?: string[];
  experimentalResults?: ExperimentalResult[];
  contributions?: string[];
  limitations?: string[];
  futureWork?: string[];
  conference?: string;
  authorRole?: string;
  myContribution?: string;
  authorDetails?: AuthorDetail[];
}
