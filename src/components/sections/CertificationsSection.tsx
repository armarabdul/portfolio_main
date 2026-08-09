"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export function CertificationsSection() {
  const hasCertifications = certifications.length > 0;

  return (
    <section id="certifications" className="py-20 relative bg-background/40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Certifications & Credentials"
          subtitle="Verified technical credentials, professional certifications, and industry specializations."
        />

        {hasCertifications ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard hover className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground mb-4">
                      {cert.issuingOrganization}
                    </p>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline pt-4 border-t border-border/40"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Verify Credential
                    </a>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Placeholder Card when empty */
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <GlassCard className="p-8 space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Professional Credentials Portfolio
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Technical certifications in Cloud Architecture, AI Safety, and Smart Contract Auditing are updated dynamically as credentials are confirmed.
              </p>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
