import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe, Sparkles, ShieldCheck, Zap, Bot } from "lucide-react";
import Button from "../common/Button";

function Hero() {
  const [urlInput, setUrlInput] = useState("");
  const navigate = useNavigate();

  const handleQuickAnalyze = (e) => {
    e.preventDefault();
    if (!urlInput.trim()) {
      navigate("/analyze");
      return;
    }
    navigate("/analyze", { state: { url: urlInput } });
  };

  const handleSampleClick = (domain) => {
    setUrlInput(domain);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-grid-pattern">
      {/* Ambient background light glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-blue-600/15 to-cyan-400/15 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Pill Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md shadow-sm shadow-indigo-500/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
            </span>
            <span>Next-Gen SEO • GEO • AEO Engine</span>
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15] max-w-3xl">
            Dominate Organic Search &{" "}
            <span className="block bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mt-1">
              AI Answer Engines
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300/90 max-w-xl">
            Audit your website for traditional search engines, ChatGPT, Perplexity, and Gemini. Receive AI-driven recommendations, schema checks, and GEO readiness scores in under 10 seconds.
          </p>

          {/* URL Input Box */}
          <form onSubmit={handleQuickAnalyze} className="mt-7 w-full max-w-xl">
            <div className="glass-panel p-1.5 sm:p-2 rounded-2xl border border-white/15 shadow-xl focus-within:border-indigo-500/60 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative flex-1 w-full flex items-center pl-2.5">
                  <Globe className="h-4 w-4 text-indigo-400 shrink-0" />
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-transparent px-2.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto shrink-0 px-6 shadow-md shadow-indigo-600/30"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Analyze Now
                </Button>
              </div>
            </div>

            {/* Sample Suggestions */}
            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-400 flex-wrap">
              <span className="font-semibold text-slate-500">Quick Try:</span>
              {[
                { domain: "https://openai.com", label: "openai.com" },
                { domain: "https://vercel.com", label: "vercel.com" },
                { domain: "https://github.com", label: "github.com" },
                { domain: "https://stripe.com", label: "stripe.com" },
              ].map((sample) => (
                <button
                  key={sample.domain}
                  type="button"
                  onClick={() => handleSampleClick(sample.domain)}
                  className="rounded-full bg-slate-900/90 px-3 py-0.5 text-slate-300 border border-slate-800 hover:border-indigo-500/40 hover:text-white transition-colors"
                >
                  {sample.label}
                </button>
              ))}
            </div>
          </form>

          {/* Feature Highlights Pill Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-slate-800/80 pt-6 text-[11px] sm:text-xs font-medium text-slate-400">
            <div className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              <span>Instant 10s Scans</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bot className="h-3.5 w-3.5 text-indigo-400" />
              <span>LLM Readiness Benchmarks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Actionable AI Recommendations</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;