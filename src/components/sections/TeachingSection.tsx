"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { teachingExperiences } from "@/data/teaching";
import { BookOpen, GraduationCap, Users, CheckCircle } from "lucide-react";

export function TeachingSection() {
  return (
    <section id="teaching" className="py-24 relative bg-background/50 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Teaching & Academic Mentorship"
          subtitle="Empowering the next generation of software engineers and machine learning practitioners."
        />

        {teachingExperiences.map((teach) => (
          <div key={teach.id} className="mt-12 space-y-12">
            {/* Institution Header Card */}
            <GlassCard className="p-8 glow-blue">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono mb-2">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>{teach.role}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {teach.institution}
                  </h3>
                </div>
                <div className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1.5 rounded-full self-start md:self-auto">
                  {teach.location} • {teach.startDate} - {teach.current ? "Present" : teach.endDate}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {teach.description}
              </p>
            </GlassCard>

            {/* Subjects Taught Grid */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Core Courses & Pedagogy</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teach.subjects.map((subj, index) => (
                  <motion.div
                    key={subj.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <h5 className="text-lg font-bold text-foreground mb-2">
                          {subj.name}
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {subj.description}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Academic Responsibilities */}
            <GlassCard className="p-8">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span>Academic Scope & Laboratory Leadership</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {teach.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
