"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Higher Education & Academic Pursuits"
          subtitle="Advanced academic foundation powering cutting-edge AI and Blockchain research."
        />

        <div className="max-w-3xl mx-auto space-y-6 mt-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hover className="p-8 glow-blue">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {edu.degree}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {edu.startDate} - {edu.status === "in-progress" ? "Present" : edu.endDate}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {edu.degree} in {edu.field}
                </h3>
                {edu.institution && (
                  <p className="text-sm font-mono text-accent mb-4">
                    {edu.institution}
                  </p>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {edu.description}
                </p>

                {edu.thesis && (
                  <div className="p-4 rounded-xl glass border border-border/50 text-xs">
                    <span className="font-mono font-semibold text-primary block mb-1">
                      Thesis / Research Specialization:
                    </span>
                    <span className="text-muted-foreground italic">
                      &quot;{edu.thesis}&quot;
                    </span>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
