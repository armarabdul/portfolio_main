import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Global Utilities */}
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      {/* Main Sections Assembly */}
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <TeachingSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
        <ProcessSection />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
