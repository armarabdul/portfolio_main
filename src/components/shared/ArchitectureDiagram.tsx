import { GlassCard } from "./GlassCard";
import { Database, Shield, Smartphone, Layers } from "lucide-react";

interface ArchitectureDiagramProps {
  slug: string;
}

export function ArchitectureDiagram({ slug }: ArchitectureDiagramProps) {
  if (slug === "grey-erp-solution") {
    return (
      <GlassCard className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              ERP Module & Data Architecture
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              ASP.NET ERP: Module Workflows + SQL Database Integration
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Enterprise ERP
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">01. ERP Modules</div>
            <h4 className="text-sm font-bold text-foreground">Accounts & Properties</h4>
            <p className="text-xs text-muted-foreground">Financial accounts, property records, receipts, payments, and reporting workflows.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">02. Application Layer</div>
            <h4 className="text-sm font-bold text-foreground">ASP.NET Backend</h4>
            <p className="text-xs text-muted-foreground">Business logic, module controllers, and API development in ASP.NET.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">03. API Layer</div>
            <h4 className="text-sm font-bold text-foreground">API Integration</h4>
            <p className="text-xs text-muted-foreground">REST API development and integration connecting application to data services.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">04. Data Layer</div>
            <h4 className="text-sm font-bold text-foreground">SQL Database</h4>
            <p className="text-xs text-muted-foreground">Relational database tables, SQL queries, and data operations management.</p>
          </div>
        </div>
      </GlassCard>
    );
  }

  if (slug === "tadqeeq-erp-solution") {
    return (
      <GlassCard className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              ERP Module & Data Architecture
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              ASP.NET ERP: Inventory, Sales & CRM + SQL Database Integration
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Enterprise ERP
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">01. ERP Modules</div>
            <h4 className="text-sm font-bold text-foreground">Inventory, Sales & CRM</h4>
            <p className="text-xs text-muted-foreground">Stock management, sales order processing, and customer relationship records.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">02. Application Layer</div>
            <h4 className="text-sm font-bold text-foreground">ASP.NET Backend</h4>
            <p className="text-xs text-muted-foreground">Business logic, module routing, and backend services developed in ASP.NET.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">03. API Layer</div>
            <h4 className="text-sm font-bold text-foreground">API Integration</h4>
            <p className="text-xs text-muted-foreground">API development connecting ERP business modules to data and backend services.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">04. Data Layer</div>
            <h4 className="text-sm font-bold text-foreground">SQL Database</h4>
            <p className="text-xs text-muted-foreground">Relational SQL tables, query optimization, and data schema management.</p>
          </div>
        </div>
      </GlassCard>
    );
  }

  if (
    slug === "federated-learning-privacy-preserving-medical-data-classification"
  ) {
    return (
      <GlassCard className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Federated Learning Client-Server Architecture
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Privacy-Preserving Training: Flower Framework + TensorFlow/Keras + FedAvg Strategy
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            Federated Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Step 1 */}
          <div className="p-4 rounded-xl glass border border-border/60 space-y-3 relative group hover:border-primary/50 transition-all">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Database className="h-5 w-5" />
            </div>
            <div className="font-mono text-xs text-primary font-bold">Layer 01</div>
            <h4 className="text-sm font-bold text-foreground">Hospital Data Silos</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Simulated independent hospital nodes holding localized medical datasets.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl glass border border-border/60 space-y-3 relative group hover:border-primary/50 transition-all">
            <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <Layers className="h-5 w-5" />
            </div>
            <div className="font-mono text-xs text-accent font-bold">Layer 02</div>
            <h4 className="text-sm font-bold text-foreground">Local Model Training</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              TensorFlow/Keras neural network training on private hospital data.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl glass border border-border/60 space-y-3 relative group hover:border-primary/50 transition-all">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Shield className="h-5 w-5" />
            </div>
            <div className="font-mono text-xs text-primary font-bold">Layer 03</div>
            <h4 className="text-sm font-bold text-foreground">Flower Server & FedAvg</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Central server aggregating client model weights via Federated Averaging.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl glass border border-border/60 space-y-3 relative group hover:border-primary/50 transition-all">
            <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <Smartphone className="h-5 w-5" />
            </div>
            <div className="font-mono text-xs text-accent font-bold">Layer 04</div>
            <h4 className="text-sm font-bold text-foreground">Global Model Broadcast</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Redistribution of updated global parameters across communication rounds.
            </p>
          </div>
        </div>
      </GlassCard>
    );
  }

  if (
    slug === "blockchain-data-marketplace" ||
    slug === "blockchain-enabled-decentralized-data-marketplace"
  ) {
    return (
      <GlassCard className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              System Architecture & Data Flow
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Decentralized Web3 Pipeline: Smart Contracts + IPFS Storage
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Web3 Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Step 1 */}
          <div className="p-4 rounded-xl glass border border-border/60 space-y-3 relative group hover:border-primary/50 transition-all">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Smartphone className="h-5 w-5" />
            </div>
            <div className="font-mono text-xs text-primary font-bold">Layer 01</div>
            <h4 className="text-sm font-bold text-foreground">MetaMask Client</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Wallet authentication & transaction signing via EIP-1193 protocol.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl glass border border-border/60 space-y-3 relative group hover:border-primary/50 transition-all">
            <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <Layers className="h-5 w-5" />
            </div>
            <div className="font-mono text-xs text-accent font-bold">Layer 02</div>
            <h4 className="text-sm font-bold text-foreground">Next.js DApp UI</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              React interface communicating with Hardhat nodes & Web3 providers.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl glass border border-border/60 space-y-3 relative group hover:border-primary/50 transition-all">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Shield className="h-5 w-5" />
            </div>
            <div className="font-mono text-xs text-primary font-bold">Layer 03</div>
            <h4 className="text-sm font-bold text-foreground">Solidity Contracts</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ethereum smart contracts governing dataset rental & purchase logic.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl glass border border-border/60 space-y-3 relative group hover:border-primary/50 transition-all">
            <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <Database className="h-5 w-5" />
            </div>
            <div className="font-mono text-xs text-accent font-bold">Layer 04</div>
            <h4 className="text-sm font-bold text-foreground">IPFS Storage</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Decentralized content-addressed file storage for ML datasets.
            </p>
          </div>
        </div>
      </GlassCard>
    );
  }

  if (slug === "aitm-official-website" || slug === "aitm-website") {
    return (
      <GlassCard className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Migration & System Architecture
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              CMS Migration: WordPress ➔ Custom Django Application & Admission Portal
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Web Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">01. Legacy Migration</div>
            <h4 className="text-sm font-bold text-foreground">WordPress CMS</h4>
            <p className="text-xs text-muted-foreground">Migrated static pages and content structures into Django models.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">02. App Controller</div>
            <h4 className="text-sm font-bold text-foreground">Django Backend</h4>
            <p className="text-xs text-muted-foreground">Python Django views, URL routing, and database models.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">03. Admin Panel</div>
            <h4 className="text-sm font-bold text-foreground">Django Administration</h4>
            <p className="text-xs text-muted-foreground">Centralized admin interface for institutional content updates.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">04. Portal UI</div>
            <h4 className="text-sm font-bold text-foreground">Admission Portal & UI</h4>
            <p className="text-xs text-muted-foreground">Responsive Bootstrap UI with dynamic student admission workflows.</p>
          </div>
        </div>
      </GlassCard>
    );
  }

  if (
    slug === "infrastructure-complaint-management" ||
    slug === "infrastructure-complaint-management-system"
  ) {
    return (
      <GlassCard className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Workflow & Approval Architecture
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Multi-Stage Workflow: Submission ➔ Dual-Admin Approval ➔ Team Dispatch ➔ Resolution
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Workflow Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">01. Submission</div>
            <h4 className="text-sm font-bold text-foreground">User Complaint</h4>
            <p className="text-xs text-muted-foreground">Complaint logging with photo/document evidence attachment.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">02. Dual Approval</div>
            <h4 className="text-sm font-bold text-foreground">Dual-Admin Verification</h4>
            <p className="text-xs text-muted-foreground">Requires 2 distinct admin approvals before status changes RED ➔ YELLOW.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">03. Execution</div>
            <h4 className="text-sm font-bold text-foreground">Maintenance Work</h4>
            <p className="text-xs text-muted-foreground">Team dispatch, WorkUpdate logging, & completion image upload.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">04. Resolution</div>
            <h4 className="text-sm font-bold text-foreground">Admin Verification</h4>
            <p className="text-xs text-muted-foreground">Final admin evidence review and audit-backed resolution confirmation.</p>
          </div>
        </div>
      </GlassCard>
    );
  }

  if (slug === "ai-weather-forecast") {
    return (
      <GlassCard className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              ML Pipeline Architecture
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Predictive Analytics: Scikit-learn + Flask API + React
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            AI / ML Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">Input</div>
            <h4 className="text-sm font-bold text-foreground">Weather Telemetry</h4>
            <p className="text-xs text-muted-foreground">Historical weather data & live sensor inputs.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">Processing</div>
            <h4 className="text-sm font-bold text-foreground">Scikit-learn Model</h4>
            <p className="text-xs text-muted-foreground">Rainfall, temp & heatwave classification.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">API Layer</div>
            <h4 className="text-sm font-bold text-foreground">Flask REST Server</h4>
            <p className="text-xs text-muted-foreground">Low-latency prediction endpoint delivery.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">Visualization</div>
            <h4 className="text-sm font-bold text-foreground">React Dashboard</h4>
            <p className="text-xs text-muted-foreground">Interactive risk charts & AI assistant query interface.</p>
          </div>
        </div>
      </GlassCard>
    );
  }

  if (slug === "resume-screening") {
    return (
      <GlassCard className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              NLP & Candidate Ranking Architecture
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Automated Resume Screening: NLP Pipeline + FastAPI + React
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            NLP Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">Ingestion</div>
            <h4 className="text-sm font-bold text-foreground">Resume Parsing</h4>
            <p className="text-xs text-muted-foreground">PDF/Doc text extraction & cleaning.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">NLP Vectorizer</div>
            <h4 className="text-sm font-bold text-foreground">Skill Extraction</h4>
            <p className="text-xs text-muted-foreground">Entity recognition & TF-IDF vectorization.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-primary font-bold">Scoring</div>
            <h4 className="text-sm font-bold text-foreground">FastAPI Scorer</h4>
            <p className="text-xs text-muted-foreground">Cosine similarity & candidate ranking model.</p>
          </div>
          <div className="p-4 rounded-xl glass border border-border/60 space-y-2">
            <div className="font-mono text-xs text-accent font-bold">Recruiter UI</div>
            <h4 className="text-sm font-bold text-foreground">React Dashboard</h4>
            <p className="text-xs text-muted-foreground">Ranked candidate table & skill match breakdown.</p>
          </div>
        </div>
      </GlassCard>
    );
  }

  return null;
}
