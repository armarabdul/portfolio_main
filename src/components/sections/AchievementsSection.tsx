"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { achievements } from "@/data/achievements";
import { Trophy, Sparkles } from "lucide-react";

export function AchievementsSection() {
  const hasAchievements = achievements.length > 0;

  return (
    <section id="achievements" className="py-20 relative border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Key Achievements & Honors"
          subtitle="Recognition across software engineering innovation, academic teaching, and research."
        />

        {hasAchievements ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {achievements.map((ach, index) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard hover className="p-6">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ach.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <GlassCard className="p-8 space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Academic & Research Honors
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Highlights across research papers, software engineering excellence, and academic teaching contributions.
              </p>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
