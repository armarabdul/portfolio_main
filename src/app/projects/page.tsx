"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Briefcase, FlaskConical, GraduationCap, Star, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

type FilterKey = "all" | "featured" | "professional" | "research" | "academic";

const FILTERS: { key: FilterKey; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All Projects", icon: <LayoutGrid className="h-3.5 w-3.5" /> },
  { key: "featured", label: "Featured", icon: <Star className="h-3.5 w-3.5" /> },
  { key: "professional", label: "Professional", icon: <Briefcase className="h-3.5 w-3.5" /> },
  { key: "research", label: "Research & Technical", icon: <FlaskConical className="h-3.5 w-3.5" /> },
  { key: "academic", label: "Academic", icon: <GraduationCap className="h-3.5 w-3.5" /> },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 section-pattern">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back link */}
          <Link href="/#projects" className="inline-block mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Projects <span className="text-gradient">Archive</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Complete index of software engineering solutions, research applications, and
              technical projects built across AI, Blockchain, and Full-Stack Web Development.
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeFilter === key
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-background/60 text-muted-foreground border-border/60 hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {icon}
                {label}
                <span
                  className={`ml-1 text-xs px-1.5 py-0.5 rounded-full font-mono ${
                    activeFilter === key
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {key === "all"
                    ? projects.length
                    : key === "featured"
                    ? projects.filter((p) => p.featured).length
                    : projects.filter((p) => p.category === key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filtered.length > 0 ? (
                filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-2 py-24 text-center text-muted-foreground">
                  No projects in this category yet.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
