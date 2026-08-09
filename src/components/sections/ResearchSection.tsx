"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { TechBadge } from "@/components/shared/TechBadge";
import { publications } from "@/data/research";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";

export function ResearchSection() {
  const featuredResearch = publications.filter((p) => p.featured);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="research" className="py-24 relative bg-background/40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Research Publications"
          subtitle="Scientific literature and technical contributions in Blockchain Security and AI Safety."
        />

        <div className="space-y-8 mt-12 max-w-5xl mx-auto">
          {featuredResearch.map((pub, index) => {
            const isExpanded = expandedId === pub.id;
            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <GlassCard hover className="p-8 relative overflow-hidden group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {pub.type} • {pub.status}
                    </span>
                    {pub.year && (
                      <span className="font-mono text-xs text-muted-foreground">
                        {pub.year}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-3">
                    {pub.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
                    <span>Authors:</span>
                    <span className="text-foreground font-medium">
                      {pub.authors.join(", ")}
                    </span>
                  </div>

                  {/* Abstract preview */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {isExpanded
                      ? pub.abstract
                      : `${pub.abstract.slice(0, 220)}...`}
                  </p>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                    className="text-xs font-mono text-primary hover:underline mb-6 block"
                  >
                    {isExpanded ? "Collapse Abstract" : "Read Full Abstract"}
                  </button>

                  {/* Research Areas */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                      Research Areas
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.researchAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs font-mono px-2.5 py-0.5 rounded-full glass border border-border/50 text-foreground"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {pub.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {pub.pdfUrl ? (
                        <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="rounded-full bg-primary text-primary-foreground gap-2">
                            <FileText className="h-4 w-4" />
                            Download PDF
                          </Button>
                        </a>
                      ) : (
                        <Button size="sm" variant="outline" disabled className="rounded-full gap-2 opacity-60">
                          <FileText className="h-4 w-4" />
                          PDF Under Review
                        </Button>
                      )}

                      {pub.doiUrl && (
                        <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="ghost" className="rounded-full gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Read Paper
                          </Button>
                        </a>
                      )}
                    </div>

                    <Link href={`/research/${pub.slug}`}>
                      <Button size="sm" variant="ghost" className="rounded-full gap-1.5 text-xs text-primary">
                        Research Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/research">
            <Button size="lg" variant="outline" className="rounded-full border-primary/30 gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              View Research Archive
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
