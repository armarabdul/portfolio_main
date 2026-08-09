"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { processSteps } from "@/data/process";
import {
  ClipboardList,
  Search,
  FileText,
  BookOpen,
  Boxes,
  Database,
  Code,
  TestTube,
  Rocket,
  FileCheck,
  Settings,
  ArrowDown,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  Search,
  FileText,
  BookOpen,
  Boxes,
  Database,
  Code,
  TestTube,
  Rocket,
  FileCheck,
  Settings,
};

export function ProcessSection() {
  const sortedSteps = [...processSteps].sort((a, b) => a.order - b.order);

  return (
    <section id="process" className="py-24 relative bg-background/50 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Software Engineering Process"
          subtitle="Systematic end-to-end methodology applied to deliver robust, maintainable, and scalable software systems."
        />

        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {sortedSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || Code;
            const isLast = index === sortedSteps.length - 1;

            return (
              <div key={step.id} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="w-full"
                >
                  <GlassCard hover className="p-6 flex items-start gap-4 sm:gap-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center text-primary shrink-0 glow-blue">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold text-foreground">
                          {step.title}
                        </h3>
                        <span className="font-mono text-xs font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                          Step 0{step.order}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>

                {!isLast && (
                  <div className="my-2 text-primary/40 animate-pulse">
                    <ArrowDown className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
