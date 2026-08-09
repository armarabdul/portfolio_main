"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function ProjectsSection() {
  // Show professional + research projects on the homepage (highest priority)
  const featuredProjects = projects.filter(
    (p) => p.category === "professional" || p.category === "research"
  );

  return (
    <section id="projects" className="py-24 relative section-pattern">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Professional industry work and research projects across AI/ML, Blockchain, and Full-Stack Architecture."
        />

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/40 hover:border-primary hover:bg-primary/10 gap-2.5 px-8 py-6 text-base font-semibold glow-blue transition-all"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Explore Full Projects Archive ({projects.length})
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
