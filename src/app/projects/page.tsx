import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "All Projects Archive",
  description: "Complete archive of software engineering, AI/ML, and blockchain projects by Abdul Muqeet Armar.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 section-pattern">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back link */}
          <Link href="/#projects" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Projects <span className="text-gradient">Archive</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Complete index of software engineering solutions, research applications, and production tools built across AI, Blockchain, and Full-Stack Web Development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
