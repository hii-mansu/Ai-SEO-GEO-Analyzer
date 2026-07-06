import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-12 text-center shadow-2xl">

        <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
          AI Powered SEO • GEO • AEO
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Ready to Improve Your Website?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Analyze your website in seconds and receive actionable AI-powered
          recommendations to improve SEO, GEO, technical health, and AI search
          visibility.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <Link
            to="/analyze"
            className="flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Analyze Website
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/pricing"
            className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            View Pricing
          </Link>

        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-blue-100">

          <div>⚡ Instant AI Analysis</div>

          <div>🚀 Actionable Recommendations</div>

          <div>🌍 SEO + GEO Ready</div>

        </div>

      </div>
    </section>
  );
}

export default CTA;