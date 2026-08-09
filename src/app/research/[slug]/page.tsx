import { notFound } from "next/navigation";
import Link from "next/link";
import { publications } from "@/data/research";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/shared/TechBadge";
import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, ExternalLink, ShieldCheck, BookOpen } from "lucide-react";

export function generateStaticParams() {
  return publications.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const pub = publications.find((p) => p.slug === params.slug);
  if (!pub) return { title: "Publication Not Found" };
  return {
    title: `${pub.title} — Research Paper`,
    description: pub.abstract.slice(0, 160),
  };
}

export default async function PublicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const pub = publications.find((p) => p.slug === resolvedParams.slug);

  if (!pub) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 section-pattern">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/research" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Research Archive
            </Button>
          </Link>

          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                {pub.type} • {pub.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {pub.title}
            </h1>

            <div className="text-sm font-mono text-muted-foreground flex flex-wrap items-center gap-2">
              <span>Authors:</span>
              <span className="text-foreground font-medium">
                {pub.authors.join(", ")}
              </span>
            </div>
          </div>

          <GlassCard className="p-8 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Abstract
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {pub.abstract}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Research Focus & Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {pub.keywords.map((kw) => (
                  <span key={kw} className="text-xs font-mono px-3 py-1 rounded-full glass border border-border/50 text-foreground">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {pub.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border/40 flex items-center gap-4">
              {pub.pdfUrl ? (
                <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-primary text-primary-foreground gap-2">
                    <FileText className="h-4 w-4" />
                    Download Research Paper
                  </Button>
                </a>
              ) : (
                <Button size="lg" variant="outline" disabled className="rounded-full gap-2 opacity-60">
                  <FileText className="h-4 w-4" />
                  PDF Under Review
                </Button>
              )}

              {pub.doiUrl && (
                <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="ghost" className="rounded-full gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Read Publication
                  </Button>
                </a>
              )}
            </div>
          </GlassCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}
