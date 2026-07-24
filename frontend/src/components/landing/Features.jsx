import { Search, Bot, Globe, FileSearch, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const features = [
  {
    icon: Search,
    title: "Comprehensive SEO Diagnostics",
    description:
      "Deep scan meta titles, open graph, header hierarchy, canonical links, sitemaps, and robots.txt configurations in real time.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Bot,
    title: "Generative Engine Optimization (GEO)",
    description:
      "Benchmark your domain's readability and citations for ChatGPT, Perplexity, Gemini, and next-generation Answer Engines.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Schema & Structured Data Audit",
    description:
      "Verify Schema.org markup JSON-LD objects, organization entities, breadcrumbs, and rich snippet indexing compliance.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileSearch,
    title: "LLMs.txt & Protocol Verification",
    description:
      "Inspect AI crawler directives (`/llms.txt`, `/llms-full.txt`), ensuring AI scrapers index your core product data accurately.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Zap,
    title: "Instant AI Code Recommendations",
    description:
      "Get prioritized, copy-pasteable HTML and JSON snippets to resolve critical warnings immediately without trial and error.",
    color: "from-amber-400 to-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Executive Health Dashboards",
    description:
      "Track your site's SEO & GEO progress over time with clean visual grade cards and downloadable analysis reports.",
    color: "from-emerald-400 to-teal-500",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#090D16] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Next-Gen Auditing"
          title="Everything You Need for Search & AI Visibility"
          subtitle="A complete suite of diagnostic tools engineered to boost organic rank on Google and maximize citations in AI Answer Engines."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl glass-panel p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <span className="text-slate-600 group-hover:text-indigo-400 transition-colors">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>

                {/* Subtle hover gradient bottom line */}
                <div className={`absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;