"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { profile } from "@/data/profile";
import { timelineEvents } from "@/data/about";
import { Code, Briefcase, GraduationCap, Brain, Link as LinkIcon, BookOpen } from "lucide-react";

const iconMap = {
  Code,
  Briefcase,
  GraduationCap,
  Brain,
  Link: LinkIcon,
  BookOpen,
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative section-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Software engineer and AI researcher committed to building intelligent, secure, and decentralized systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard className="p-6 sm:p-8 space-y-6 glow-blue">
              <h3 className="text-2xl font-bold text-foreground">
                Engineering & Research Paradigm
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {profile.bio}
              </p>
              <div className="border-t border-border/50 pt-6 space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-mono text-foreground font-medium">
                    {profile.location}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-mono text-primary font-medium">
                    AI, Blockchain & Web3
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Academic Status</span>
                  <span className="font-mono text-accent font-medium">
                    M.Tech Researcher
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Timeline Column */}
          <div className="lg:col-span-7 relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent hidden sm:block" />

            <div className="space-y-6">
              {timelineEvents.map((event, index) => {
                const Icon = iconMap[event.iconName] || Code;
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-0 sm:pl-14"
                  >
                    {/* Icon circle */}
                    <div className="absolute left-3 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary hidden sm:flex glow-blue">
                      <Icon className="h-3.5 w-3.5" />
                    </div>

                    <GlassCard hover className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[11px] sm:text-xs text-primary font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                          {event.category}
                        </span>
                        <span className="font-mono text-[11px] sm:text-xs text-muted-foreground">
                          {event.year}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-foreground mt-2">
                        {event.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
