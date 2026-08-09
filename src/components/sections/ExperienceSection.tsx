"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { TechBadge } from "@/components/shared/TechBadge";
import { experiences } from "@/data/experience";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-background/40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Professional Experience"
          subtitle="Proven track record in software application engineering and technical academia."
        />

        <div className="mt-12 space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const dateDisplay = exp.current
              ? `${exp.startDate} - Present`
              : `${exp.startDate} - ${exp.endDate || ""}`;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <GlassCard hover className="p-8 relative overflow-hidden group">
                  {/* Subtle top indicator highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-6 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-2">
                        <Briefcase className="h-3.5 w-3.5" />
                        <span>{exp.role}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-border/50 text-foreground font-semibold">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span>{dateDisplay}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities Grid */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider font-mono">
                      Key Responsibilities & Contributions
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Badges */}
                  {exp.technologies.length > 0 && (
                    <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground mr-2">
                        Tech Stack:
                      </span>
                      {exp.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
