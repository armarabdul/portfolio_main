import { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "mtech-cs",
    institution: "Bearys Institute of Technology",
    degree: "M.Tech in Computer Science",
    field: "Computer Science",
    startDate: "Jan 2024",
    endDate: "Aug 2026",
    status: "in-progress",
    description:
      "Regular mode M.Tech in Computer Science. Completed coursework, awaiting final semester result.",
    thesis:
      "Blockchain-Enabled Decentralized Data Marketplace for Secure Machine Learning Dataset Sharing",
    achievements: [
      "Regular mode M.Tech degree",
      "Completed, awaiting final semester result",
    ],
    featured: true,
  },
  {
    id: "be-cse",
    institution: "Visvesvaraya Technological University",
    location: "Belgaum, Karnataka, India",
    degree: "B.E. in Computer Science & Engineering",
    field: "Computer Science & Engineering",
    startDate: "Aug 2018",
    endDate: "Jul 2022",
    status: "completed",
    gpa: "7.7 / 10",
    description:
      "Bachelor of Engineering in Computer Science & Engineering.",
    coursework: [
      "Data Structures",
      "Python",
      "Web Development Fundamentals",
      "Databases",
    ],
    achievements: ["GPA: 7.7 / 10"],
    featured: true,
  },
];
