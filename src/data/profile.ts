import { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Abdul Muqeet Armar",
  firstName: "Abdul Muqeet",
  lastName: "Armar",
  titles: [
    { text: "Software Engineer" },
    { text: "AI & Machine Learning Engineer" },
    { text: "Blockchain Researcher" },
    { text: "Lecturer" },
  ],
  tagline:
    "I build intelligent, scalable and secure software solutions combining Artificial Intelligence, Blockchain and Modern Web Technologies.",
  bio: "Software Engineer, AI & Machine Learning Engineer, Blockchain Researcher, and Lecturer based in Bhatkal, Karnataka, India. Experienced in full-stack web development, ERP software systems, machine learning pipelines, and blockchain-enabled decentralized data marketplaces.",
  location: "Bhatkal, Karnataka, India",
  email: "abdulmuqeetarmar@gmail.com",
  phone: "+91 9964941418",
  website: "https://github.com/armarabdul",
  resumeUrl: "/resume/Abdul-Muqeet-Armar-Resume.pdf",
  profileImage: "/images/profile-placeholder.svg",
  socialLinks: [
    {
      id: "github",
      platform: "GitHub",
      url: "https://github.com/armarabdul",
      icon: "Github",
      label: "GitHub Profile",
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/abdul-muqeet-armar-a1786619b",
      icon: "Linkedin",
      label: "LinkedIn Profile",
    },
    {
      id: "email",
      platform: "Email",
      url: "mailto:abdulmuqeetarmar@gmail.com",
      icon: "Mail",
      label: "Send Email",
    },
    {
      id: "phone",
      platform: "Phone",
      url: "tel:+919964941418",
      icon: "Phone",
      label: "Call",
    },
  ],
};
