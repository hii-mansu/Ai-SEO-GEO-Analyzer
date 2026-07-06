import { Link } from "react-router-dom";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center gap-16 px-6 py-20 lg:flex-row">

        <div className="max-w-2xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            AI Powered SEO • GEO • AEO Analysis
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Optimize Your Website
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              for AI Search
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Analyze your website for SEO, GEO, AEO and technical issues.
            Receive AI-powered recommendations to improve visibility on
            Google, ChatGPT, Gemini and future Answer Engines.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/analyze"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Analyze Website
              <ArrowRight size={18} />
            </Link>

            <button className="rounded-xl border border-slate-700 px-7 py-4 font-semibold text-white transition hover:bg-slate-900">
              View Demo Report
            </button>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              ⚡ AI Powered
            </div>

            <div className="flex items-center gap-2">
              🚀 Instant Analysis
            </div>

            <div className="flex items-center gap-2">
              🌍 GEO Ready
            </div>

          </div>

        </div>


        <div className="w-full max-w-md">

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Globe className="text-blue-400" size={20} />

                <span className="font-medium text-white">
                  openai.com
                </span>

              </div>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                Completed
              </span>

            </div>


            <div className="space-y-5">

              <Score title="SEO Score" value="89" />

              <Score title="GEO Score" value="92" />

              <Score title="Overall" value="91" />

            </div>

            <div className="mt-8 rounded-2xl bg-slate-800 p-4">

              <p className="mb-3 font-semibold text-red-400">
                Critical Issues
              </p>

              <ul className="space-y-2 text-sm text-slate-300">

                <li>• Missing Schema Markup</li>

                <li>• Open Graph Missing</li>

                <li>• Missing llms.txt</li>

              </ul>

            </div>

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

      <div className="h-2 overflow-hidden rounded-full bg-slate-700">

        <div
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
}

export default Hero;