"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { skillCategories } from "@/data/skills";
import { Monitor, Server, Brain, Link as LinkIcon, Database, Wrench, Check } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Brain,
  Link: LinkIcon,
  Database,
  Wrench,
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory =
    skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 relative section-pattern">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Technical Skills & Ecosystem"
          subtitle="Comprehensive toolkits across Full-Stack Development, Artificial Intelligence, and Decentralized Blockchain."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Monitor;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg glow-blue scale-105"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          {activeCategory.skills.map((skill, i) => (
            <GlassCard
              key={skill.name}
              delay={i * 0.04}
              hover
              className="p-4 text-center flex flex-col items-center justify-center gap-2 group"
            >
              <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Check className="h-4 w-4" />
              </div>
              <span className="font-mono text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
