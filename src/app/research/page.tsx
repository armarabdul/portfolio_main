import type { Metadata } from "next";
import Link from "next/link";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Research Publications Archive",
  description: "Scientific literature and technical publications by Abdul Muqeet Armar.",
};

export default function ResearchArchivePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 section-pattern">
        <div className="mx-auto max-w-7xl px-6">
          <Link href="/#research" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Research <span className="text-gradient">Publications</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Scientific papers and technical studies focused on Blockchain Security, Smart Contracts, LLM Jailbreak Mitigation, and Decentralized Data Architecture.
            </p>
          </div>

          <ResearchSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
