import { Globe, Bot, Zap, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Globe,
    number: "50,000+",
    label: "Websites Audited",
    description: "Across 45+ global industries",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Bot,
    number: "99.4%",
    label: "LLM Accuracy",
    description: "Optimized for ChatGPT & Gemini",
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    icon: Zap,
    number: "< 8s",
    label: "Instant Analysis",
    description: "Real-time AI crawler scans",
    gradient: "from-amber-400 to-rose-500",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    label: "Actionable Insights",
    description: "Ready-to-copy code fixes",
    gradient: "from-emerald-400 to-teal-500",
  },
];

function Stats() {
  return (
    <section className="relative py-12 bg-slate-950/60 border-y border-slate-800/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel-hover p-6 rounded-2xl flex items-center gap-4 relative overflow-hidden group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`text-2xl font-extrabold tracking-tight bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.number}
                  </h3>
                  <p className="text-xs font-bold text-white mt-0.5">{item.label}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;