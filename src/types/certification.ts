export interface Certification {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  featured: boolean;
}
