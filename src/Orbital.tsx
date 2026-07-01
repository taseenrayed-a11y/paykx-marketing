import "./_group.css";
import {
  ArrowRight,
  Activity,
  Network,
  History,
  Timer,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Zap,
  Database,
  Layers,
  Building2,
  Mail,
  Github,
  ChevronRight,
  Smartphone,
  Wallet,
  Bot,
  FileText,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";

const DEMO_URL = "https://api.paykx.co.uk";
const BOOKING_URL = "https://calendly.com/taseenrayed";
const REPORT_URL = `${import.meta.env.BASE_URL}corridor-health-report.pdf`;

const display = "'Outfit', sans-serif";
const body = "'Plus Jakarta Sans', sans-serif";
const mono = "'Fira Code', monospace";

type LegalView = "home" | "privacy" | "terms";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-extrabold tracking-tight ${className}`}
      style={{ fontFamily: display }}
    >
      PAY<span className="text-[#00C4B4]">KX</span>
    </span>
  );
}

function TopNav() {
  const links: { label: string; href: string; external?: boolean }[] = [
    { label: "Product", href: "#how-it-works" },
    { label: "Use Cases", href: "#built-for" },
    { label: "Pricing", href: "#pricing" },
    { label: "Developers", href: DEMO_URL, external: true },
    { label: "Trust", href: "#trust" },
    { label: "About", href: "#why" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0A1628] text-white shadow-sm">
            <Layers className="h-4 w-4 text-[#00C4B4]" />
          </div>
          <Wordmark className="text-xl text-[#0A1628]" />
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0A1628]"
              style={{ fontFamily: body }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-[#0A1628]"
            asChild
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-[#00C4B4] text-white hover:bg-[#00A396]"
            asChild
          >
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              Try Demo
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function StatusPill({
  children,
  tone = "teal",
}: {
  children: React.ReactNode;
  tone?: "teal" | "amber" | "navy";
}) {
  const map = {
    teal: "border-[#00C4B4]/20 bg-[#00C4B4]/10 text-[#008A7E]",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    navy: "border-[#0A1628]/20 bg-[#0A1628]/5 text-[#0A1628]",
  } as const;
  const dot = {
    teal: "bg-[#00C4B4]",
    amber: "bg-amber-500",
    navy: "bg-[#0A1628]",
  } as const;
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${map[tone]}`}
      style={{ fontFamily: body }}
    >
      <span className={`relative flex h-2 w-2`}>
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot[tone]} opacity-75`}
        />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dot[tone]}`} />
      </span>
      {children}
    </div>
  );
}

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
      style={{ fontFamily: body }}
    >
      <ShieldCheck className="h-3.5 w-3.5 text-[#00C4B4]" />
      {children}
    </div>
  );
}

/* ---------------- Verdict Cards (Replaces Orbital) ---------------- */

function VerdictCards() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="flex items-center gap-4 border-2 border-[#00C4B4]/30 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4B4]/10">
          <CheckCircle2 className="h-6 w-6 text-[#00C4B4]" />
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold text-[#0A1628]" style={{ fontFamily: display }}>GO</div>
          <div className="text-xs text-slate-500" style={{ fontFamily: body }}>Safe to proceed (score 0.87)</div>
        </div>
      </Card>
      
      <Card className="ml-6 flex items-center gap-4 border border-amber-200 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
          <AlertTriangle className="h-6 w-6 text-amber-500" />
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold text-[#0A1628]" style={{ fontFamily: display }}>DEGRADED</div>
          <div className="text-xs text-slate-500" style={{ fontFamily: body }}>Requires review (score 0.64)</div>
        </div>
      </Card>
      
      <Card className="ml-12 flex items-center gap-4 border border-rose-200 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50">
          <XCircle className="h-6 w-6 text-rose-500" />
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold text-[#0A1628]" style={{ fontFamily: display }}>NO-GO</div>
          <div className="text-xs text-slate-500" style={{ fontFamily: body }}>Blocked (score 0.12)</div>
        </div>
      </Card>
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* Left */}
        <div className="max-w-xl">
          <h1
            className="text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0A1628] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: display }}
          >
            Verify a payment before it moves.
          </h1>

          <p
            className="mt-6 text-lg leading-relaxed text-slate-600"
            style={{ fontFamily: body }}
          >
            PAYKX is an independent decision layer that checks whether a payment
            should proceed &mdash; before it&rsquo;s sent. Get a clear{" "}
            <strong className="text-[#0A1628]">GO</strong>, <strong className="text-[#0A1628]">DEGRADED</strong>, or{" "}
            <strong className="text-[#0A1628]">NO-GO</strong> verdict in under a second.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-[#0A1628] text-white hover:bg-[#132847]"
              asChild
            >
              <a href={DEMO_URL}>
                Try Live Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-[#0A1628] hover:bg-slate-50"
              asChild
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <TrustPill>FCA Digital Sandbox Participant</TrustPill>
            <TrustPill>750,000+ synthetic transactions tested</TrustPill>
            <TrustPill>Sub-second deterministic verdict</TrustPill>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm">
            <VerdictCards />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why PAYKX ---------------- */

function WhySection() {
  return (
    <section id="why" className="border-t border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="mb-6">
            <StatusPill tone="navy">Live in demo · shadow mode · UK&ndash;Nigeria</StatusPill>
          </div>
          <span
            className="text-sm font-semibold uppercase tracking-widest text-[#00C4B4]"
            style={{ fontFamily: display }}
          >
            Why PAYKX
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl"
            style={{ fontFamily: display }}
          >
            Most corridor failures are predictable. They&rsquo;re just checked
            too late.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              </div>
              <h3
                className="text-xl font-bold text-[#0A1628]"
                style={{ fontFamily: display }}
              >
                The problem
              </h3>
            </div>
            <p
              className="mt-4 text-slate-600 leading-relaxed"
              style={{ fontFamily: body }}
            >
              By the time a payment fails, the money&rsquo;s already gone. Teams
              usually find out only after settlement &mdash; through reversals,
              trapped liquidity, and compliance issues that force manual
              investigations and carry real operational risk.
            </p>
          </Card>

          <Card className="border-[#00C4B4]/20 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00C4B4]/10">
                <ShieldCheck className="h-5 w-5 text-[#00C4B4]" />
              </div>
              <h3
                className="text-xl font-bold text-[#0A1628]"
                style={{ fontFamily: display }}
              >
                The PAYKX answer
              </h3>
            </div>
            <p
              className="mt-4 text-slate-600 leading-relaxed"
              style={{ fontFamily: body }}
            >
              PAYKX helps you catch these issues before execution &mdash; a
              single deterministic check that returns a verdict you can gate on,
              before the payment is sent.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

function ProbeCard({
  icon,
  label,
  desc,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
}) {
  return (
    <Card className="flex flex-col border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#0A1628]">
        {icon}
      </div>
      <div
        className="mt-5 text-lg font-bold text-[#0A1628]"
        style={{ fontFamily: display }}
      >
        {label}
      </div>
      <div className="mt-2 text-sm text-slate-600" style={{ fontFamily: body }}>
        {desc}
      </div>
    </Card>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span
            className="text-sm font-semibold uppercase tracking-widest text-[#00C4B4]"
            style={{ fontFamily: display }}
          >
            How it works
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl"
            style={{ fontFamily: display }}
          >
            One clear verdict before every payment.
          </h2>
          <p
            className="mt-4 text-lg text-slate-600"
            style={{ fontFamily: body }}
          >
            PAYKX combines behavioral, network, and historical data to deliver
            one deterministic decision.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProbeCard
            icon={<Activity className="h-6 w-6 text-[#00C4B4]" />}
            label="Behavioral"
            desc="Analyzes velocity, patterns, and anomalies in the immediate corridor to detect irregularities."
          />
          <ProbeCard
            icon={<Network className="h-6 w-6 text-[#00C4B4]" />}
            label="Network"
            desc="Evaluates counterparties and node density to uncover hidden risk associations."
          />
          <ProbeCard
            icon={<History className="h-6 w-6 text-[#00C4B4]" />}
            label="Historical"
            desc="Compares current activity against the established corridor baseline."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Built For ---------------- */

function BuiltFor() {
  const audiences = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Cross-border PSPs",
      desc: "Gate cross-border settlement before funds ever leave the rail.",
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: "Remittance platforms",
      desc: "Screen each corridor for degradation before you promise a payout.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile money aggregators",
      desc: "Catch a fragile corridor before a transfer reaches the wallet.",
    },
    {
      icon: <Wallet className="h-5 w-5" />,
      title: "Treasury & liquidity teams",
      desc: "See corridor health in real time instead of reacting after the fact.",
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "Agentic platforms",
      desc: "Give automated payment agents a deterministic pre-flight check before each transfer.",
    },
  ];
  return (
    <section className="border-t border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl" id="built-for">
          <span
            className="text-sm font-semibold uppercase tracking-widest text-[#00C4B4]"
            style={{ fontFamily: display }}
          >
            Built for
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl"
            style={{ fontFamily: display }}
          >
            Built for teams moving money across borders.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <Card
              key={a.title}
              className="border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#0A1628] border border-slate-100">
                {a.icon}
              </div>
              <h3
                className="mt-5 text-lg font-bold text-[#0A1628]"
                style={{ fontFamily: display }}
              >
                {a.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-slate-600"
                style={{ fontFamily: body }}
              >
                {a.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

function Pricing() {
  const tiers = [
    {
      step: "01",
      title: "Free Shadow Diagnostic",
      price: "Free",
      desc: "We analyse a representative sample of your payment flows and show where PAYKX would have returned GO, DEGRADED, or NO-GO before execution.",
    },
    {
      step: "02",
      title: "Design Partner Pilot",
      price: "from £1,000 – £2,000 / month",
      desc: "If the diagnostic shows clear value, we run a 3-month pilot. Early pilots typically start from £1,000 – £2,000 per month.",
    },
    {
      step: "03",
      title: "Production",
      price: "£4,000 – £12,000+ / month",
      desc: "Following a successful pilot, we move to a commercial agreement, typically £4,000 – £12,000+ per month, depending on verification volume, corridor coverage, and SLA requirements.",
      highlight: true,
    },
  ];
  return (
    <section
      id="pricing"
      className="border-t border-slate-100 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span
            className="text-sm font-semibold uppercase tracking-widest text-[#00C4B4]"
            style={{ fontFamily: display }}
          >
            Pricing
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl"
            style={{ fontFamily: display }}
          >
            Priced to your payment operation.
          </h2>
          <p
            className="mt-4 text-lg text-slate-600"
            style={{ fontFamily: body }}
          >
            We don&rsquo;t publish fixed pricing because every payment operation
            has different volumes, corridors, and requirements. Our process
            focuses on demonstrating value before production deployment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.step}
              className={`relative flex flex-col p-8 shadow-sm transition-shadow hover:shadow-md ${
                t.highlight
                  ? "border-[#0A1628] bg-[#0A1628] text-white"
                  : "border-slate-200 bg-white text-[#0A1628]"
              }`}
            >
              <span
                className={`text-sm font-bold ${t.highlight ? "text-[#00C4B4]" : "text-[#00C4B4]"}`}
                style={{ fontFamily: mono }}
              >
                {t.step}
              </span>
              <h3
                className="mt-3 text-xl font-bold"
                style={{ fontFamily: display }}
              >
                {t.title}
              </h3>
              <div
                className={`mt-2 text-sm font-semibold ${t.highlight ? "text-slate-300" : "text-slate-600"}`}
                style={{ fontFamily: mono }}
              >
                {t.price}
              </div>
              <p
                className={`mt-5 text-sm leading-relaxed ${t.highlight ? "text-slate-300" : "text-slate-600"}`}
                style={{ fontFamily: body }}
              >
                {t.desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="bg-[#00C4B4] text-white hover:bg-[#00A396]"
            asChild
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-request-diagnostic"
            >
              Request a Shadow Diagnostic <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust & Evidence ---------------- */

function TrustEvidence() {
  const [gateOpen, setGateOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit = name.trim().length > 1 && emailValid && consent;

  function handleGateSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  }

  function resetGate(open: boolean) {
    setGateOpen(open);
    if (!open) {
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setConsent(false);
      }, 200);
    }
  }

  const points: {
    icon: React.ReactNode;
    text: string;
  }[] = [
    {
      icon: <ShieldCheck className="h-5 w-5 flex-shrink-0 text-[#00C4B4]" />,
      text: "FCA Digital Sandbox Participant",
    },
    {
      icon: <Database className="h-5 w-5 flex-shrink-0 text-[#0A1628]" />,
      text: "Tested with 750,000+ synthetic transactions",
    },
    {
      icon: <Zap className="h-5 w-5 flex-shrink-0 text-[#00C4B4]" />,
      text: "Live shadow demo available",
    },
    {
      icon: <Timer className="h-5 w-5 flex-shrink-0 text-[#0A1628]" />,
      text: "Sub-second decision capability",
    },
  ];
  return (
    <section id="trust" className="border-t border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span
            className="text-sm font-semibold uppercase tracking-widest text-[#00C4B4]"
            style={{ fontFamily: display }}
          >
            Trust &amp; evidence
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl"
            style={{ fontFamily: display }}
          >
            Backed by real testing and independent validation.
          </h2>
          <p className="mt-4 text-lg text-slate-600" style={{ fontFamily: body }}>
            PAYKX is currently in demo / shadow mode &mdash; every figure below
            comes from synthetic data, with no live funds moved.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.text}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm"
            >
              {p.icon}
              <span
                className="text-sm font-bold text-[#0A1628]"
                style={{ fontFamily: body }}
              >
                {p.text}
              </span>
            </div>
          ))}

          <button
            type="button"
            onClick={() => setGateOpen(true)}
            data-testid="button-report-gate"
            className="group flex items-center gap-4 rounded-xl border border-[#0A1628]/10 bg-white px-6 py-5 text-left shadow-sm transition-colors hover:border-[#0A1628]/30 sm:col-span-2"
          >
            <FileText className="h-5 w-5 flex-shrink-0 text-[#0A1628]" />
            <span
              className="text-sm font-bold text-[#0A1628]"
              style={{ fontFamily: body }}
            >
              UK&ndash;Nigeria Corridor Health Report (v1.0)
            </span>
            <span
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#00C4B4]"
              style={{ fontFamily: body }}
            >
              <Download className="h-4 w-4" /> Get the report
            </span>
          </button>
        </div>
      </div>

      <Dialog open={gateOpen} onOpenChange={resetGate}>
        <DialogContent className="sm:max-w-md">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle style={{ fontFamily: display }}>
                  Get the Corridor Health Report
                </DialogTitle>
                <DialogDescription style={{ fontFamily: body }}>
                  Enter your details to download the UK&ndash;Nigeria Corridor
                  Health Report (v1.0). No spam &mdash; just the report and the
                  occasional corridor update.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleGateSubmit} className="mt-2 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="report-name" style={{ fontFamily: body }}>
                    Full name
                  </Label>
                  <Input
                    id="report-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    data-testid="input-report-name"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="report-email" style={{ fontFamily: body }}>
                    Work email
                  </Label>
                  <Input
                    id="report-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    data-testid="input-report-email"
                  />
                </div>
                <label
                  className="flex items-start gap-2.5 text-xs text-slate-600"
                  style={{ fontFamily: body }}
                >
                  <Checkbox
                    checked={consent}
                    onCheckedChange={(c) => setConsent(c === true)}
                    className="mt-0.5"
                    data-testid="checkbox-report-consent"
                  />
                  <span>
                    I agree to PAYKX contacting me about this report and corridor
                    updates, in line with the Privacy Policy. I can unsubscribe at
                    any time.
                  </span>
                </label>
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full bg-[#0A1628] hover:bg-[#132847]"
                  data-testid="button-report-submit"
                  style={{ fontFamily: display }}
                >
                  Download the report
                </Button>
              </form>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle style={{ fontFamily: display }}>
                  You&rsquo;re all set
                </DialogTitle>
                <DialogDescription style={{ fontFamily: body }}>
                  Thanks{name ? `, ${name.split(" ")[0]}` : ""}. Your copy of the
                  UK&ndash;Nigeria Corridor Health Report is ready below.
                </DialogDescription>
              </DialogHeader>
              <a
                href={REPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-report-download"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#00C4B4] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#00A396]"
                style={{ fontFamily: display }}
              >
                <Download className="h-4 w-4" /> Download the report (PDF)
              </a>
              <p
                className="mt-1 text-center text-xs text-slate-500"
                style={{ fontFamily: body }}
              >
                We&rsquo;ve noted your email and will be in touch with corridor
                updates.
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ---------------- Live demo callout ---------------- */

function DemoCallout() {
  return (
    <section id="demo" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl bg-[#0A1628] p-10 sm:p-14 shadow-xl">
          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <StatusPill tone="teal">Shadow mode · all data simulated</StatusPill>
              <h2
                className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ fontFamily: display }}
              >
                Ready to verify your corridors before money moves?
              </h2>
              <p
                className="mt-4 max-w-md text-slate-300 leading-relaxed"
                style={{ fontFamily: body }}
              >
                The interactive demo runs on synthetic transactions in the FCA
                Digital Sandbox. Send a corridor and amount, get a verdict back in
                milliseconds &mdash; no production data, no money moved.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#00C4B4] text-white hover:bg-[#00A396]"
                  asChild
                >
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                    Try Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
                  asChild
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a 20-min Demo
                  </a>
                </Button>
              </div>
              <div
                className="mt-6 text-xs text-slate-400"
                style={{ fontFamily: mono }}
              >
                api.paykx.co.uk
              </div>
            </div>

            {/* code sample */}
            <Card className="border-slate-800 bg-[#060D1A] p-0 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-slate-700" />
                <span className="h-3 w-3 rounded-full bg-slate-700" />
                <span className="h-3 w-3 rounded-full bg-slate-700" />
                <span
                  className="ml-2 text-xs text-slate-500"
                  style={{ fontFamily: mono }}
                >
                  POST /v1/verify
                </span>
              </div>
              <pre
                className="overflow-x-auto px-5 py-4 text-[13px] leading-relaxed text-slate-300"
                style={{ fontFamily: mono }}
              >
{`curl -X POST https://api.paykx.co.uk/v1/verify \\
  -H "Authorization: Bearer sk_demo_…" \\
  -d '{ "corridor": "GB->NG", "amount": 4200 }'

`}<span className="text-slate-500">{`# → response`}</span>{`
{
  "verdict":    `}<span className="text-[#00C4B4]">{`"GO"`}</span>{`,
  "score":      `}<span className="text-[#00C4B4]">{`0.87`}</span>{`,
  "confidence": `}<span className="text-blue-400">{`0.93`}</span>{`,
  "volatility": `}<span className="text-blue-400">{`0.12`}</span>{`,
  "corridor":   "GB->NG"
}`}
              </pre>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

type FooterLink = {
  label: string;
  href?: string;
  external?: boolean;
  to?: LegalView;
};

function Footer({ onNavigate }: { onNavigate: (view: LegalView) => void }) {
  const columns: { h: string; items: FooterLink[] }[] = [
    {
      h: "Product",
      items: [
        { label: "Overview", href: "#why" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Use cases", href: "#built-for" },
        { label: "Trust", href: "#trust" },
      ],
    },
    {
      h: "Developers",
      items: [
        { label: "Live demo", href: DEMO_URL, external: true },
        { label: "REST API", href: DEMO_URL, external: true },
        { label: "Sandbox", href: DEMO_URL, external: true },
      ],
    },
    {
      h: "Company",
      items: [
        { label: "Book a demo", href: BOOKING_URL, external: true },
        { label: "Privacy Policy", to: "privacy" },
        { label: "Terms of Service", to: "terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0A1628] text-white">
                <Layers className="h-4 w-4 text-[#00C4B4]" />
              </div>
              <Wordmark className="text-xl text-[#0A1628]" />
            </div>
            <p
              className="mt-6 max-w-sm text-sm text-slate-600 leading-relaxed"
              style={{ fontFamily: body }}
            >
              Pre-execution risk intelligence for cross-border payment
              corridors. Currently in demo / shadow mode &mdash; all data
              simulated for evaluation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                className="bg-[#0A1628] text-white hover:bg-[#132847]"
                asChild
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-4 w-4" /> Book a demo
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-[#0A1628] hover:bg-slate-100"
                asChild
              >
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Developers
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.h}>
                <div
                  className="text-sm font-bold text-[#0A1628]"
                  style={{ fontFamily: display }}
                >
                  {col.h}
                </div>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.to ? (
                        <button
                          type="button"
                          onClick={() => onNavigate(item.to!)}
                          className="text-left text-sm text-slate-600 hover:text-[#0A1628]"
                          style={{ fontFamily: body }}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          {...(item.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-sm text-slate-600 hover:text-[#0A1628]"
                          style={{ fontFamily: body }}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p
          className="mt-16 max-w-3xl text-xs leading-relaxed text-slate-500"
          style={{ fontFamily: body }}
        >
          PAYKX Rail is not authorised or regulated by the Financial Conduct
          Authority (FCA). Participation in the FCA Digital Sandbox does not
          constitute FCA approval, authorisation, or endorsement. The platform is
          currently in demo / shadow mode and all data shown is synthetic.
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <div
            className="text-xs text-slate-500"
            style={{ fontFamily: body }}
          >
            © {new Date().getFullYear()} PAYKX Rail. Demo environment · synthetic
            data only.
          </div>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => onNavigate("privacy")}
              className="text-xs text-slate-500 hover:text-[#0A1628]"
              style={{ fontFamily: body }}
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => onNavigate("terms")}
              className="text-xs text-slate-500 hover:text-[#0A1628]"
              style={{ fontFamily: body }}
            >
              Terms
            </button>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#00C4B4]" />
              <span
                className="text-xs font-semibold text-slate-600"
                style={{ fontFamily: body }}
              >
                FCA Digital Sandbox Participant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Legal pages ---------------- */

type LegalSection = { h: string; p: string[] };

const LAST_UPDATED = "30 June 2026";

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    h: "1. Who we are",
    p: [
      "PAYKX Rail (\u201cPAYKX\u201d, \u201cwe\u201d, \u201cus\u201d) provides pre-execution risk intelligence for cross-border payment corridors. PAYKX is currently operating in demo / shadow mode, and all verification data shown in the product is synthetic.",
      "This Privacy Policy explains how we handle personal data we collect through this website, including when you book a demo or contact us. For any privacy question, contact us at privacy@paykx.co.uk.",
    ],
  },
  {
    h: "2. What we collect",
    p: [
      "When you book a demo or get in touch, we collect the information you provide \u2014 typically your name, work email, company, and any message you send. If you use our demo API, we collect the corridor and amount values you submit, which are synthetic and not real payment data.",
      "We also collect basic technical information such as your IP address and browser type to keep the site secure and to understand aggregate usage.",
    ],
  },
  {
    h: "3. How we use it",
    p: [
      "We use your information to respond to enquiries, schedule and run demos, improve the product, and keep the service secure. We do not sell your personal data.",
      "Where we rely on consent (for example, marketing emails) you can withdraw it at any time. Otherwise we process data on the basis of our legitimate interest in operating and improving PAYKX, or to take steps at your request before entering into a contract.",
    ],
  },
  {
    h: "4. Sharing and third parties",
    p: [
      "We use trusted third-party providers to operate the site and our demos \u2014 for example, a scheduling tool to book demos and infrastructure providers to host the service. These providers process data on our behalf under appropriate agreements.",
      "We may disclose information if required by law or to protect our rights, users, or the public.",
    ],
  },
  {
    h: "5. International transfers",
    p: [
      "Some providers may process data outside the UK. Where that happens, we rely on appropriate safeguards such as UK adequacy regulations or standard contractual clauses.",
    ],
  },
  {
    h: "6. Retention",
    p: [
      "We keep personal data only for as long as needed for the purposes described above, or as required by law, after which it is deleted or anonymised.",
    ],
  },
  {
    h: "7. Your rights",
    p: [
      "Under UK data protection law you have rights to access, correct, delete, or restrict the use of your personal data, and to object to certain processing. To exercise these rights, contact privacy@paykx.co.uk. You also have the right to complain to the Information Commissioner\u2019s Office (ICO) at ico.org.uk.",
    ],
  },
  {
    h: "8. Changes",
    p: [
      "We may update this policy from time to time. The date at the top shows when it was last revised.",
    ],
  },
];

const TERMS_SECTIONS: LegalSection[] = [
  {
    h: "1. These terms",
    p: [
      "These Terms of Service govern your use of the PAYKX Rail website and demo environment. By accessing the site or demo, you agree to these terms. If you do not agree, please do not use the service.",
    ],
  },
  {
    h: "2. Demo / shadow mode",
    p: [
      "PAYKX is currently provided for evaluation purposes only, in demo / shadow mode. All verdicts, scores, and corridor data are generated from synthetic data. No real funds move, and no output should be relied upon to make, approve, block, or settle any real payment.",
    ],
  },
  {
    h: "3. No financial or regulatory advice",
    p: [
      "PAYKX is not authorised or regulated by the Financial Conduct Authority (FCA). Participation in the FCA Digital Sandbox does not constitute FCA approval, authorisation, or endorsement. Nothing on this site is financial, legal, compliance, or regulatory advice.",
    ],
  },
  {
    h: "4. Acceptable use",
    p: [
      "You agree not to misuse the service, including by attempting to disrupt it, access it without authorisation, reverse engineer it, or submit unlawful content. We may suspend or withdraw access to the demo at any time.",
    ],
  },
  {
    h: "5. Intellectual property",
    p: [
      "The PAYKX name, brand, content, and software are owned by PAYKX or its licensors. You may not copy, modify, or distribute them without our permission.",
    ],
  },
  {
    h: "6. Availability and changes",
    p: [
      "The demo is provided \u201cas is\u201d and \u201cas available\u201d. We may change, suspend, or discontinue any part of it at any time without notice.",
    ],
  },
  {
    h: "7. Liability",
    p: [
      "To the fullest extent permitted by law, PAYKX is not liable for any loss arising from your use of, or reliance on, the demo or any output it produces. Nothing in these terms excludes liability that cannot be excluded under applicable law.",
    ],
  },
  {
    h: "8. Governing law",
    p: [
      "These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction. For any question about these terms, contact legal@paykx.co.uk.",
    ],
  },
];

function LegalPage({
  title,
  sections,
  onBack,
}: {
  title: string;
  sections: LegalSection[];
  onBack: () => void;
}) {
  return (
    <div
      className="w-full bg-white text-[#0A1628]"
      style={{ fontFamily: body }}
    >
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-6">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0A1628] text-white shadow-sm">
              <Layers className="h-4 w-4 text-[#00C4B4]" />
            </div>
            <Wordmark className="text-xl text-[#0A1628]" />
          </button>
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0A1628]"
            style={{ fontFamily: body }}
          >
            &larr; Back to home
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1
          className="text-4xl font-extrabold tracking-tight text-[#0A1628]"
          style={{ fontFamily: display }}
        >
          {title}
        </h1>
        <p className="mt-3 text-sm text-slate-500" style={{ fontFamily: body }}>
          Last updated {LAST_UPDATED}
        </p>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
          <p
            className="text-sm leading-relaxed text-amber-800"
            style={{ fontFamily: body }}
          >
            PAYKX is currently in demo / shadow mode. This document is provided for
            the evaluation site and should be reviewed by a qualified legal adviser
            before any production launch.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2
                className="text-xl font-bold text-[#0A1628]"
                style={{ fontFamily: display }}
              >
                {s.h}
              </h2>
              {s.p.map((para, i) => (
                <p
                  key={i}
                  className="mt-3 leading-relaxed text-slate-600"
                  style={{ fontFamily: body }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <Button
            variant="outline"
            className="border-slate-300 text-slate-700"
            onClick={onBack}
          >
            &larr; Back to home
          </Button>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Page ---------------- */

export function Orbital() {
  const [view, setView] = useState<LegalView>("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "PAYKX — Verify a payment before it moves | Cross-border corridor risk intelligence";
    const setMeta = (name: string, content: string, prop = false) => {
      const selector = prop
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (prop) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const description =
      "PAYKX is an independent pre-execution decision layer for cross-border payments. Get a clear GO, DEGRADED, or NO-GO verdict in under a second. Currently in FCA Digital Sandbox demo / shadow mode with synthetic data.";
    setMeta("description", description);
    setMeta("og:title", "PAYKX — Verify a payment before it moves", true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    return () => {
      document.title = prevTitle;
    };
  }, []);

  if (view === "privacy") {
    return (
      <LegalPage
        title="Privacy Policy"
        sections={PRIVACY_SECTIONS}
        onBack={() => setView("home")}
      />
    );
  }

  if (view === "terms") {
    return (
      <LegalPage
        title="Terms of Service"
        sections={TERMS_SECTIONS}
        onBack={() => setView("home")}
      />
    );
  }

  return (
    <div
      className="w-full scroll-smooth bg-white text-[#0A1628]"
      style={{ fontFamily: body }}
    >
      <TopNav />
      <Hero />
      <WhySection />
      <HowItWorks />
      <BuiltFor />
      <Pricing />
      <TrustEvidence />
      <DemoCallout />
      <Footer onNavigate={setView} />
    </div>
  );
}
