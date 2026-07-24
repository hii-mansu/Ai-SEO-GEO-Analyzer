import { Globe, Bot, CheckCircle2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Enter Your Domain URL",
    description: "Provide any URL. Our intelligent crawler initiates a deep multi-point scan across metadata, scripts, and content structure.",
  },
  {
    icon: Bot,
    step: "02",
    title: "AI Engine Audit",
    description: "Our AI model tests technical SEO factors, GEO citation patterns, Schema objects, and LLM readiness metrics.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Receive Actionable Report",
    description: "Get immediate scores, prioritized warnings, and ready-to-copy code fixes to implement on your site.",
  },
];

function HowItWorks() {
  return (
    <section className="relative py-24 bg-slate-950/70 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple 3-Step Process"
          title="Audit Your Domain in 30 Seconds"
          subtitle="No complex installations or API keys required. Just enter your domain and let AI analyze your search footprint."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connector Line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-indigo-500/20 via-cyan-500/40 to-indigo-500/20 -translate-y-6 z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative z-10 glass-panel p-8 rounded-3xl text-center border border-white/10 flex flex-col items-center group hover:border-indigo-500/40 transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-1 text-xs font-black text-white shadow-md shadow-indigo-600/30">
                  STEP {item.step}
                </div>

                <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:scale-110 group-hover:border-indigo-500/50 group-hover:text-cyan-300 transition-all duration-300 shadow-xl">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;