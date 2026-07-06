import { Globe, Bot, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Enter Website URL",
    description:
      "Paste your website URL and start the analysis with a single click.",
  },
  {
    icon: Bot,
    title: "AI Analyzes Your Website",
    description:
      "Our AI scans technical SEO, GEO, AEO, metadata, content and website structure.",
  },
  {
    icon: BadgeCheck,
    title: "Get Actionable Report",
    description:
      "Receive scores, issues, strengths and recommendations to improve your website.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            How It Works
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Analyze your website in three simple steps.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative rounded-3xl border border-white/10 bg-slate-900 p-8 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={30} />
                </div>

                <div className="mt-8 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
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