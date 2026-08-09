"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";
import { profile } from "@/data/profile";
import { Mail, Phone, MapPin, Send, Download, CheckCircle2, RotateCcw } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Modular UI demonstration — ready for future API route / EmailJS integration
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const githubLink = socialLinks.find((s) => s.id === "github")?.url || "#";
  const linkedinLink = socialLinks.find((s) => s.id === "linkedin")?.url || "#";

  return (
    <section id="contact" className="py-24 relative section-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open for technical leadership, AI/Blockchain research collaboration, software architecture consultation, and academic engagement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-start">
          {/* Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard className="p-6 sm:p-8 space-y-6 glow-blue">
              <h3 className="text-2xl font-bold text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Feel free to reach out directly via email, connect on LinkedIn, or inspect my open-source code repositories on GitHub.
              </p>

              <div className="space-y-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-4 text-sm">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground block">Email</span>
                    <a href={`mailto:${profile.email}`} className="font-mono text-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground block">Phone</span>
                    <a href={`tel:${profile.phone}`} className="font-mono text-foreground hover:text-accent transition-colors text-xs sm:text-sm">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground block">Location</span>
                    <span className="font-mono text-foreground text-xs sm:text-sm">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social & Resume Download */}
              <div className="pt-6 border-t border-border/50 space-y-4">
                <div className="flex items-center gap-3">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full rounded-full gap-2 border-border/60 hover:border-primary/50 text-xs">
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full rounded-full gap-2 border-border/60 hover:border-primary/50 text-xs">
                      <LinkedinIcon className="h-4 w-4 text-accent" />
                      LinkedIn
                    </Button>
                  </a>
                </div>

                <a href={profile.resumeUrl} download className="block">
                  <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground gap-2 text-xs">
                    <Download className="h-4 w-4" />
                    Download Resume (PDF)
                  </Button>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="h-16 w-16 rounded-full bg-primary/20 border border-primary text-primary flex items-center justify-center mx-auto glow-blue">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">
                      Message Submitted Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Your message has been logged and I will respond to your query promptly.
                    </p>
                  </div>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="rounded-full gap-2 border-primary/40 text-xs sm:text-sm"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl glass border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl glass border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Collaboration / Research Query"
                      className="w-full px-4 py-3 rounded-xl glass border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl glass border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-xs sm:text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 shadow-lg glow-blue text-xs sm:text-sm"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
