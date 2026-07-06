import {
  Globe,
  TriangleAlert,
  CircleCheck,
  Sparkles,
} from "lucide-react";

function ReportPreview() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl grid items-center gap-16 lg:grid-cols-2">

        <div>

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            AI Generated Report
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Professional Reports
            <span className="block text-blue-400">
              That Actually Help
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Receive an AI-powered report with SEO scores, GEO readiness,
            technical issues, strengths and practical recommendations to
            improve your website.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <CircleCheck className="text-green-400" />
              <span className="text-slate-300">
                AI Summary
              </span>
            </div>

            <div className="flex items-center gap-4">
              <CircleCheck className="text-green-400" />
              <span className="text-slate-300">
                Critical Issues
              </span>
            </div>

            <div className="flex items-center gap-4">
              <CircleCheck className="text-green-400" />
              <span className="text-slate-300">
                Actionable Recommendations
              </span>
            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Globe className="text-blue-400" />

              <span className="font-semibold text-white">
                openai.com
              </span>

            </div>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
              Completed
            </span>

          </div>

          <div className="mt-8 space-y-6">

            <Score title="SEO Score" value={89} />

            <Score title="GEO Score" value={92} />

            <Score title="Overall Score" value={91} />

          </div>

          <div className="mt-8 rounded-2xl bg-slate-800 p-5">

            <div className="flex items-center gap-2 text-red-400">

              <TriangleAlert size={18} />

              <span className="font-semibold">
                Critical Issues
              </span>

            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">

              <li>• Missing Schema Markup</li>
              <li>• Missing Open Graph Tags</li>
              <li>• Missing llms.txt</li>

            </ul>

          </div>

          <div className="mt-6 rounded-2xl bg-slate-800 p-5">

            <div className="flex items-center gap-2 text-blue-400">

              <Sparkles size={18} />

              <span className="font-semibold">
                AI Recommendation
              </span>

            </div>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Implement structured data and Open Graph metadata to improve
              visibility across Google Search and AI-powered search engines.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

function Score({ title, value }) {
  return (
    <div>

      <div className="mb-2 flex justify-between">

        <span className="text-slate-300">
          {title}
        </span>

        <span className="font-bold text-white">
          {value}
        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-700">

        <div
          className="h-2 rounded-full bg-blue-500"
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
}

export default ReportPreview;