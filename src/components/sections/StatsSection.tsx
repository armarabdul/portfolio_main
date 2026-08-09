"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { projects } from "@/data/projects";
import { publications } from "@/data/research";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { teachingExperiences } from "@/data/teaching";
import { FolderGit2, BookOpen, GraduationCap, Briefcase, Cpu, Award } from "lucide-react";

export function StatsSection() {
  const totalProjects = projects.length;
  const totalPublications = publications.length;
  const totalTechnologies = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );
  const totalSubjectsTaught = teachingExperiences.reduce(
    (acc, t) => acc + t.subjects.length,
    0
  );

  // Dynamic years of experience from earliest experience start date
  const currentYear = new Date().getFullYear();
  const startYear = Math.min(
    ...experiences.map((e) => parseInt(e.startDate, 10)).filter((y) => !isNaN(y))
  );
  const yearsExperience = Math.max(1, currentYear - startYear);

  const stats = [
    {
      id: "projects",
      label: "Projects Completed",
      value: totalProjects,
      suffix: "+",
      icon: FolderGit2,
    },
    {
      id: "publications",
      label: "Research Publications",
      value: totalPublications,
      suffix: "",
      icon: BookOpen,
    },
    {
      id: "experience-years",
      label: "Years Experience",
      value: yearsExperience,
      suffix: "+",
      icon: Briefcase,
    },
    {
      id: "technologies",
      label: "Technologies Mastered",
      value: totalTechnologies,
      suffix: "+",
      icon: Cpu,
    },
    {
      id: "teaching",
      label: "Academic Subjects Taught",
      value: totalSubjectsTaught,
      suffix: "+",
      icon: GraduationCap,
    },
    {
      id: "domains",
      label: "Core Specializations",
      value: 4,
      suffix: "",
      icon: Award,
    },
  ];

  return (
    <section className="py-12 bg-background/50 border-y border-border/40 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass gradient-border rounded-xl p-3.5 sm:p-6 text-center hover:glow-blue transition-all duration-300 group"
              >
                <div className="inline-flex p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold text-foreground font-mono">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1.5}
                  />
                </div>
                <div className="mt-1 text-[11px] sm:text-xs md:text-sm text-muted-foreground font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
