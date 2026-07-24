import { Globe, AlertTriangle, CheckCircle2, Sparkles, Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

function ReportPreview() {
  return (
    <section className="relative py-24 bg-[#090D16] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Left Description Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              Executive Level Diagnostics
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              Reports Built for Developers, SEOs & Marketers
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
              No generic jargon. Get clear, structured breakdown of technical issues, schema deficiencies, AI readiness indexes, and precise code fixes you can implement right away.
            </p>

            <div className="mt-8 space-y-4 w-full">
              <FeatureCheck text="Comprehensive SEO & GEO Scorecard (0-100)" />
              <FeatureCheck text="LLMs.txt & AI Crawler Access Directives Audit" />
              <FeatureCheck text="Schema.org JSON-LD Validation & Code Generator" />
              <FeatureCheck text="Prioritized Critical Issues with Ready-to-Paste Code" />
            </div>

            <div className="mt-10">
              <Link to="/analyze">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Test Your Website Free
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Live Report Card Preview */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-purple-500/30 blur-2xl pointer-events-none" />

              <div className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
                
                {/* Domain Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-indigo-400">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">openai.com</h3>
                      <p className="text-xs text-slate-400">Analysis completed 2m ago</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                    Grade A Audit
                  </span>
                </div>

                {/* Score Meters */}
                <div className="space-y-4">
                  <ReportMeter title="SEO Technical Score" value={89} color="bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <ReportMeter title="GEO AI Search Readiness" value={92} color="bg-gradient-to-r from-indigo-500 to-purple-500" />
                  <ReportMeter title="Overall Audit Index" value={91} color="bg-gradient-to-r from-emerald-400 to-cyan-400" />
                </div>

                {/* Critical Issues Box */}
                <div className="rounded-2xl bg-rose-950/20 p-4 border border-rose-500/20">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold mb-2.5">
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    <span>2 Critical Technical Issues</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      Missing <code className="text-amber-300 bg-slate-900 px-1 py-0.5 rounded">/llms.txt</code> standard file
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      Incomplete Schema.org <code className="text-amber-300 bg-slate-900 px-1 py-0.5 rounded">WebSite</code> search action
                    </li>
                  </ul>
                </div>

                {/* AI Snippet Box */}
                <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                      <Code2 className="h-4 w-4 text-indigo-400" />
                      Recommended Code Fix
                    </span>
                    <span className="text-[10px] text-slate-400">JSON-LD</span>
                  </div>
                  <pre className="text-[11px] text-cyan-300 bg-slate-900/90 p-2.5 rounded-xl border border-white/5 font-mono overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OpenAI",
  "url": "https://openai.com"
}`}
                  </pre>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCheck({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <span className="text-sm font-medium text-slate-200">{text}</span>
    </div>
  );
}

function ReportMeter({ title, value, color }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs font-semibold">
        <span className="text-slate-300">{title}</span>
        <span className="font-extrabold text-white">{value}/100</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900 border border-slate-800">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default ReportPreview;