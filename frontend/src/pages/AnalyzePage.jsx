import { Globe, Search, ShieldCheck, Sparkles } from "lucide-react";

function AnalyzePage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            AI Powered Website Analysis
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Analyze Your Website
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Get an AI-powered SEO, GEO and technical analysis report in seconds.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

          <label className="mb-3 block text-sm font-medium text-slate-300">
            Website URL
          </label>

          <div className="flex flex-col gap-4 md:flex-row">

            <div className="relative flex-1">

              <Globe
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="https://example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500"
              />

            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">

              <Search size={20} />

              Analyze

            </button>

          </div>

          <div className="mt-6">

            <p className="text-sm text-slate-500">
              Try:
            </p>

            <div className="mt-3 flex flex-wrap gap-3">

              <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-blue-500">
                https://openai.com
              </button>

              <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-blue-500">
                https://vercel.com
              </button>

              <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-blue-500">
                https://github.com
              </button>

            </div>

          </div>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

            <Sparkles className="text-blue-400" size={32} />

            <h3 className="mt-5 text-xl font-semibold text-white">
              AI Analysis
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              AI-powered website auditing with actionable recommendations.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

            <Search className="text-blue-400" size={32} />

            <h3 className="mt-5 text-xl font-semibold text-white">
              SEO & GEO
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Evaluate technical SEO, GEO readiness and AI visibility.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

            <ShieldCheck className="text-blue-400" size={32} />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Actionable Reports
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Receive detailed reports with issues, strengths and recommendations.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AnalyzePage;