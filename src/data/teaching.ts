import { TeachingExperience } from "@/types/teaching";

export const teachingExperiences: TeachingExperience[] = [
  {
    id: "aitm-lecturer",
    institution: "Anjuman Institute of Technology and Management (AITM)",
    role: "Lecturer & Web Developer",
    location: "Bhatkal, Karnataka, India",
    startDate: "Jul 2024",
    endDate: "Present",
    current: true,
    description:
      "Conducted training sessions, designed and guided practical laboratory sessions, and supported backend development for internal college systems.",
    subjects: [
      {
        id: "python",
        name: "Python Programming",
        description:
          "Teaching Python fundamentals, data structures, OOP, and practical programming skills.",
      },
      {
        id: "data-analytics",
        name: "Data Analytics using Python",
        description:
          "Teaching data analysis techniques using Python libraries including NumPy and Pandas.",
      },
      {
        id: "web-tech",
        name: "Web Technology",
        description:
          "Teaching web development fundamentals including HTML, CSS, JavaScript, and web frameworks.",
      },
      {
        id: "mern",
        name: "MERN Stack",
        description:
          "Teaching full-stack development using MongoDB, Express.js, React, and Node.js.",
      },
      {
        id: "ml",
        name: "Machine Learning",
        description:
          "Teaching machine learning concepts, algorithms, and practical lab sessions using Scikit-learn.",
      },
      {
        id: "git",
        name: "Git & GitHub",
        description:
          "Teaching version control with Git, collaborative development using GitHub, and repository workflows.",
      },
    ],
    responsibilities: [
      "Conducted training sessions on Web Technology, MERN Stack, Git, and Machine Learning using Python.",
      "Designed and guided practical laboratory sessions using Flask, Django, NumPy, Pandas, and scikit-learn.",
      "Supported backend development for internal college systems and student projects.",
    ],
    achievements: [],
  },
];
