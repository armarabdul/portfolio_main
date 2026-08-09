import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/shared/TechBadge";
import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/shared/SocialIcons";
import { ArchitectureDiagram } from "@/components/shared/ArchitectureDiagram";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 section-pattern">
        <div className="mx-auto max-w-5xl px-6">
          {/* Back Navigation */}
          <Link href="/projects" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects Archive
            </Button>
          </Link>

          {/* Header */}
          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {project.category.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Status: {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="rounded-full gap-2">
                    <GithubIcon className="h-4 w-4" />
                    GitHub Source Code
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="rounded-full bg-accent text-accent-foreground gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Application
                  </Button>
                </a>
              )}
              {project.researchUrl && (
                <a href={project.researchUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="ghost" className="rounded-full gap-2 text-primary">
                    <BookOpen className="h-4 w-4" />
                    Read Research Paper
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Main Case Study Sections */}
          <div className="space-y-12">
            {/* Overview & Technologies */}
            <GlassCard className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="pt-4 border-t border-border/40">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-foreground mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Problem Statement & Solution if present */}
            {project.problemStatement && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    Problem Statement
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problemStatement}
                  </p>
                </GlassCard>

                {project.solution && (
                  <GlassCard className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      Engineering Solution
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </GlassCard>
                )}
              </div>
            )}

            {/* Architecture Diagram */}
            <ArchitectureDiagram slug={project.slug} />

            {/* Key Features */}
            {project.features.length > 0 && (
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Key Features & Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl glass border border-border/40">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}

            {/* Engineering Responsibilities */}
            {project.responsibilities.length > 0 && (
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Engineering Responsibilities
                </h2>
                <ul className="space-y-3">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Layers className="h-4 w-4 text-accent shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
