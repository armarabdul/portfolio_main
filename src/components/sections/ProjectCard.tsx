"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/types/project";
import { GlassCard } from "@/components/shared/GlassCard";
import { TechBadge } from "@/components/shared/TechBadge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  CheckCircle2,
  Briefcase,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import { GithubIcon } from "@/components/shared/SocialIcons";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

const CATEGORY_META: Record<
  string,
  { label: string; icon: React.ReactNode; className: string }
> = {
  professional: {
    label: "Professional",
    icon: <Briefcase className="h-3 w-3" />,
    className:
      "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
  },
  research: {
    label: "Research",
    icon: <FlaskConical className="h-3 w-3" />,
    className: "bg-violet-500/10 border-violet-500/30 text-violet-700 dark:text-violet-400",
  },
  academic: {
    label: "Academic",
    icon: <GraduationCap className="h-3 w-3" />,
    className:
      "bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-sky-400",
  },
};

function getCategoryMeta(category: string) {
  return (
    CATEGORY_META[category] ?? {
      label: category.toUpperCase(),
      icon: null,
      className:
        "bg-primary/10 border-primary/20 text-primary",
    }
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const meta = getCategoryMeta(project.category);

  return (
    <>
      <GlassCard
        hover
        className="p-8 flex flex-col justify-between group relative overflow-hidden"
      >
        {/* Top gradient highlight on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          {/* Card Header & Category Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${meta.className}`}
            >
              {meta.icon}
              {meta.label}
            </span>
            {project.status && (
              <span className="font-mono text-xs text-muted-foreground capitalize">
                Status: {project.status}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-3">
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
            {project.shortDescription}
          </p>

          {/* Key Features Bullets */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider">
                Key Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.slice(0, 4).map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.slice(0, 6).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {project.technologies.length > 6 && (
              <span className="text-xs font-mono text-muted-foreground self-center">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full gap-1.5 text-xs border-border/60 hover:border-primary/50"
            >
              <Layers className="h-3.5 w-3.5 text-primary" />
              Quick View
            </Button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-full gap-1.5 text-xs"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  Code
                </Button>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-full gap-1.5 text-xs text-accent"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>

          <Link href={`/projects/${project.slug}`}>
            <Button
              size="sm"
              className="rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 gap-1.5 text-xs font-medium transition-all"
            >
              Full Case Study
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </GlassCard>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
