"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  children,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
