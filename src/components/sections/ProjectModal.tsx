"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Project } from "@/types/project";
import { TechBadge } from "@/components/shared/TechBadge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/shared/SocialIcons";
import Link from "next/link";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto glass-strong border-primary/20 p-6 sm:p-8">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {project.category}
            </span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-2">
            {project.shortDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-primary mb-2">
              Overview
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution if present */}
          {project.problemStatement && (
            <div>
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-primary mb-2">
                Problem Statement
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-primary mb-3">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-primary mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="rounded-full gap-2">
                  <GithubIcon className="h-4 w-4" />
                  GitHub Repository
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="rounded-full bg-accent text-accent-foreground gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </Button>
              </a>
            )}
          </div>

          <Link href={`/projects/${project.slug}`} onClick={onClose}>
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground gap-2">
              Open Full Case Study Page
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
