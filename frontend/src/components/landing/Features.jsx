import {
  Bot,
  Search,
  Globe,
  ShieldCheck,
  FileSearch,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Advanced SEO Analysis",
    description:
      "Analyze titles, meta tags, headings, images, links, structured data, robots.txt, sitemap and technical SEO issues.",
  },
  {
    icon: Bot,
    title: "AI & GEO Optimization",
    description:
      "Measure your website's readiness for AI search engines including ChatGPT, Gemini, Claude and future answer engines.",
  },
  {
    icon: Globe,
    title: "Actionable Recommendations",
    description:
      "Receive clear, AI-generated recommendations with priorities, explanations and practical solutions.",
  },
  {
    icon: FileSearch,
    title: "Technical Website Audit",
    description:
      "Detect missing metadata, broken SEO practices, accessibility issues and content optimization opportunities.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Reports",
    description:
      "Generate complete website analysis within seconds using intelligent caching and optimized AI workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Reports",
    description:
      "View comprehensive SEO, GEO and overall health scores in an easy-to-understand dashboard.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need to Optimize Your Website
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Powerful AI-driven analysis designed to improve your SEO,
            GEO, technical health and visibility across modern search engines.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-800"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">

                  <Icon size={28} />

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;