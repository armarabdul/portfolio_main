import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "Flutter" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "Django" },
      { name: "Flask" },
      { name: "FastAPI" },
      { name: "ASP.NET" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "PHP" },
    ],
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "Machine Learning" },
      { name: "NLP" },
      { name: "Scikit-learn" },
      { name: "TensorFlow" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: "Link",
    skills: [
      { name: "Ethereum" },
      { name: "Solidity" },
      { name: "Hardhat" },
      { name: "IPFS" },
      { name: "MetaMask" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "SQLite" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "MongoDB" },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Android Studio" },
      { name: "Postman" },
    ],
  },
];
