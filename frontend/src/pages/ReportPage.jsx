import {
  CircleAlert,
  CircleCheck,
  TriangleAlert,
  Sparkles,
  Globe,
} from "lucide-react";

function ReportPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 lg:flex-row">

          <div className="space-y-6 lg:w-80">

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">

              <div className="flex items-center gap-3">

                <Globe className="text-blue-400" />

                <div>

                  <p className="font-semibold text-white">
                    openai.com
                  </p>

                  <p className="text-sm text-slate-500">
                    Completed
                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-6">

                <Score title="SEO Score" score={89} />

                <Score title="GEO Score" score={92} />

                <Score title="Overall" score={91} />

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">

              <h3 className="font-semibold text-white">
                Summary
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                The website demonstrates strong SEO fundamentals with
                opportunities to improve AI readiness through structured
                data, Open Graph metadata and llms.txt.
              </p>

            </div>

          </div>

          <div className="flex-1 space-y-8">

            <SectionTitle
              icon={<CircleAlert className="text-red-400" />}
              title="Critical Issues"
            />

            <IssueCard
              title="Missing Schema Markup"
              priority="High"
              color="red"
              description="Search engines cannot fully understand your content structure."
            />

            <IssueCard
              title="Missing Open Graph"
              priority="High"
              color="red"
              description="Social sharing previews are not optimized."
            />

            <SectionTitle
              icon={<TriangleAlert className="text-yellow-400" />}
              title="Warnings"
            />

            <IssueCard
              title="Missing Image Alt Text"
              priority="Medium"
              color="yellow"
              description="Improve accessibility and image SEO."
            />

            <IssueCard
              title="Heading Structure"
              priority="Medium"
              color="yellow"
              description="Use proper heading hierarchy for better indexing."
            />

            <SectionTitle
              icon={<CircleCheck className="text-green-400" />}
              title="Strengths"
            />

            <StrengthCard text="Strong meta title and description." />

            <StrengthCard text="Excellent keyword targeting." />

            <StrengthCard text="Robots.txt and sitemap.xml configured." />

            <SectionTitle
              icon={<Sparkles className="text-blue-400" />}
              title="Recommendations"
            />

            <RecommendationCard
              title="Implement Structured Data"
              description="Add Organization, FAQ and Service schema."
            />

            <RecommendationCard
              title="Configure Open Graph"
              description="Improve social sharing previews."
            />

            <RecommendationCard
              title="Create llms.txt"
              description="Improve AI crawler guidance."
            />

          </div>

        </div>

      </div>
    </section>
  );
}

function Score({ title, score }) {
  return (
    <div>

      <div className="mb-2 flex justify-between">

        <span className="text-slate-300">
          {title}
        </span>

        <span className="font-bold text-white">
          {score}
        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-700">

        <div
          className="h-2 rounded-full bg-blue-500"
          style={{ width: `${score}%` }}
        />

      </div>

    </div>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-3">

      {icon}

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

    </div>
  );
}

function IssueCard({
  title,
  priority,
  description,
  color,
}) {
  const badge =
    color === "red"
      ? "bg-red-500/20 text-red-400"
      : "bg-yellow-500/20 text-yellow-400";

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}>
          {priority}
        </span>

      </div>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

    </div>
  );
}

function StrengthCard({ text }) {
  return (
    <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5 text-green-300">
      {text}
    </div>
  );
}

function RecommendationCard({
  title,
  description,
}) {
  return (
    <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        {description}
      </p>

    </div>
  );
}

export default ReportPage;