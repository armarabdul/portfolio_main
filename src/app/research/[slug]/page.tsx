import { notFound } from "next/navigation";
import Link from "next/link";
import { publications } from "@/data/research";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/shared/TechBadge";
import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  BookOpen,
  Cpu,
  BarChart3,
  Layers,
  Database,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Building,
} from "lucide-react";

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
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Research Archive
            </Button>
          </Link>

          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                {pub.type} • {pub.status}
              </span>
              {pub.framework && (
                <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Framework: {pub.framework}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {pub.title}
            </h1>

            <div className="space-y-1 text-sm font-mono text-muted-foreground">
              <div className="flex flex-wrap items-center gap-2">
                <span>Authors:</span>
                <span className="text-foreground font-medium">
                  {pub.authors.join(", ")}
                </span>
              </div>
              {pub.authorRole && (
                <div className="flex flex-wrap items-center gap-2 text-xs text-accent font-semibold">
                  <span>Author Role: {pub.authorRole}</span>
                </div>
              )}
              {pub.conference && (
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <Building className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">
                    Conference: {pub.conference}
                  </span>
                </div>
              )}
              {pub.institution && !pub.conference && (
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <Building className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>
                    {pub.institution}
                    {pub.department ? ` — ${pub.department}` : ""}
                  </span>
                </div>
              )}
            </div>
          </div>

          <GlassCard className="p-8 space-y-8">
            {/* Abstract */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Abstract
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {pub.abstract}
              </p>
            </div>

            {/* Experimental Results Metrics Grid */}
            {pub.experimentalResults && pub.experimentalResults.length > 0 && (
              <div className="pt-6 border-t border-border/40 space-y-4">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-accent" />
                  Reported Experimental Benchmark Results
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {pub.experimentalResults.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl glass border border-border/60 text-center space-y-1"
                    >
                      <div className="text-2xl font-bold text-primary font-mono">
                        {res.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dataset Summary */}
            {pub.datasetSummary && (
              <div className="pt-6 border-t border-border/40 space-y-3">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Database className="h-4 w-4 text-primary" />
                  Dataset & Benchmark Corpus
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pub.datasetSummary}
                </p>
              </div>
            )}

            {/* Methodology Steps */}
            {pub.methodologySteps && pub.methodologySteps.length > 0 && (
              <div className="pt-6 border-t border-border/40 space-y-4">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  System Architecture & Methodology
                </h3>
                <div className="space-y-2">
                  {pub.methodologySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="font-mono text-xs font-bold text-accent shrink-0 mt-0.5 px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Multi-Tiered Mitigation */}
            {pub.mitigationTiers && pub.mitigationTiers.length > 0 && (
              <div className="pt-6 border-t border-border/40 space-y-4">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Multi-Tiered Mitigation Workflow
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pub.mitigationTiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl glass border border-border/50 flex items-start gap-2.5 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{tier}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Research Contributions */}
            {pub.contributions && pub.contributions.length > 0 && (
              <div className="pt-6 border-t border-border/40 space-y-3">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  Key Research Contributions
                </h3>
                <ul className="space-y-2">
                  {pub.contributions.map((c, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Individual Author Contribution */}
            {pub.myContribution && (
              <div className="pt-6 border-t border-border/40 space-y-3">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-accent" />
                  Author Role & Individual Contribution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pub.myContribution}
                </p>
              </div>
            )}

            {/* Author Affiliations */}
            {pub.authorDetails && pub.authorDetails.length > 0 && (
              <div className="pt-6 border-t border-border/40 space-y-4">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  Authors & Institutional Affiliations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pub.authorDetails.map((author, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl glass border border-border/50 text-xs space-y-1"
                    >
                      <div className="font-bold text-foreground font-mono">
                        {idx + 1}. {author.name}
                      </div>
                      {author.department && (
                        <div className="text-muted-foreground">{author.department}</div>
                      )}
                      {author.institution && (
                        <div className="text-muted-foreground/80 font-mono">
                          {author.institution}
                          {author.city || author.country
                            ? ` (${[author.city, author.country].filter(Boolean).join(", ")})`
                            : ""}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Limitations & Future Work */}
            {(pub.limitations || pub.futureWork) && (
              <div className="pt-6 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pub.limitations && pub.limitations.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-400" />
                      Discussion & Limitations
                    </h3>
                    <ul className="space-y-2">
                      {pub.limitations.map((lim, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-amber-400 shrink-0">•</span>
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pub.futureWork && pub.futureWork.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Future Work & Expansion
                    </h3>
                    <ul className="space-y-2">
                      {pub.futureWork.map((fw, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary shrink-0">•</span>
                          <span>{fw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Keywords */}
            <div className="pt-6 border-t border-border/40">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Research Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {pub.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs font-mono px-3 py-1 rounded-full glass border border-border/50 text-foreground"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-border/40">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {pub.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

            {/* Publication Links / Actions */}
            <div className="pt-6 border-t border-border/40 flex flex-wrap items-center gap-4">
              {pub.pdfUrl ? (
                <>
                  <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="rounded-full bg-primary text-primary-foreground gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      View Research Paper PDF
                    </Button>
                  </a>
                  <a href={pub.pdfUrl} download target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-primary/30 gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  </a>
                </>
              ) : (
                <Button
                  size="lg"
                  variant="outline"
                  disabled
                  className="rounded-full gap-2 opacity-60"
                >
                  <FileText className="h-4 w-4" />
                  PDF Under Review / Pending Deployment
                </Button>
              )}

              {pub.doiUrl && (
                <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="rounded-full gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Read Publication (DOI)
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
