export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ProfileTitle {
  text: string;
  icon?: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  titles: ProfileTitle[];
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  resumeUrl: string;
  profileImage: string;
  socialLinks: SocialLink[];
}
