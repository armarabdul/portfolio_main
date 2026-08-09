"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "@/components/shared/ProfileImage";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profile.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const githubLink = socialLinks.find((s) => s.id === "github")?.url || "#";
  const linkedinLink = socialLinks.find((s) => s.id === "linkedin")?.url || "#";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden section-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/30 text-xs sm:text-sm font-medium text-primary mb-6 glow-blue">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for Engineering & Research Collaboration
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Hello, <br />
            <span className="text-gradient">I&apos;m {profile.name}</span>
          </h1>

          {/* Animated Titles */}
          <div className="h-12 sm:h-14 mt-4 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={titleIndex}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent font-mono"
              >
                {profile.titles[titleIndex].text}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tagline */}
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            &quot;{profile.tagline}&quot;
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={profile.resumeUrl} download>
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 glow-blue hover:glow-blue-hover shadow-lg transition-all"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>

            <a href="#projects">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 hover:border-primary/60 hover:bg-primary/10 gap-2"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>

            <a href="#contact">
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full hover:bg-muted gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </a>
          </div>

          {/* Quick Social Buttons */}
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-mono text-xs uppercase tracking-wider">Connect:</span>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <ProfileImage src={profile.profileImage} alt={profile.name} size={400} />
        </motion.div>
      </div>
    </section>
  );
}
