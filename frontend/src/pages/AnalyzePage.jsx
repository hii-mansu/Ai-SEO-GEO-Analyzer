import { Globe, Search, ShieldCheck, Sparkles, Bot, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { analyseWebsite } from "../services/analysis.service";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/common/LoadingScreen";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";

function AnalyzePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Read passed state from Hero quick search if available
  useEffect(() => {
    if (location.state?.url) {
      setUrl(location.state.url);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let targetUrl = url.trim();
    if (!targetUrl) {
      setError("Please enter a valid website URL.");
      return;
    }
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      targetUrl = "https://" + targetUrl;
    }

    setError("");
    setLoading(true);
    try {
      const report = await analyseWebsite(targetUrl);
      navigate("/report", {
        state: report,
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to analyze website. Please check the URL and try again.");
    } fontally: {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingScreen message={`Auditing ${url || "website"}...`} />;
  }

  return (
    <section className="relative min-h-screen bg-[#090D16] px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-blue-600/15 to-cyan-400/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          badge="Instant Site Audit"
          title="Analyze Any Website Domain"
          subtitle="Discover technical SEO issues, AI Answer Engine visibility benchmarks, Schema markup errors, and actionable recommendations."
        />

        {/* Command Bar Input Box */}
        <div className="mx-auto mt-12 max-w-3xl">
          <form onSubmit={handleSubmit} className="relative glass-panel p-3 sm:p-4 rounded-3xl border border-white/15 shadow-2xl space-y-4">
            
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full flex items-center">
                <div className="pointer-events-none absolute left-4 flex items-center text-indigo-400">
                  <Globe className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="https://yourwebsite.com"
                  className="w-full rounded-2xl bg-slate-900/90 py-4 pl-12 pr-4 text-sm text-white placeholder-slate-500 border border-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={loading}
                className="w-full sm:w-auto shrink-0 shadow-lg shadow-indigo-600/30"
                icon={Search}
              >
                Run AI Audit
              </Button>
            </div>

            {error && (
              <p className="text-xs font-semibold text-rose-400 pl-2">{error}</p>
            )}

            {/* Example Pills */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400 flex-wrap">
              <span className="font-semibold text-slate-500">Quick Try:</span>
              {[
                { domain: "https://openai.com", label: "OpenAI" },
                { domain: "https://vercel.com", label: "Vercel" },
                { domain: "https://github.com", label: "GitHub" },
                { domain: "https://stripe.com", label: "Stripe" },
              ].map((sample) => (
                <button
                  key={sample.domain}
                  type="button"
                  onClick={() => {
                    setUrl(sample.domain);
                    setError("");
                  }}
                  className="rounded-full bg-slate-900 px-3 py-1 text-slate-300 border border-slate-800 hover:border-indigo-500/40 hover:text-white transition-colors"
                >
                  {sample.label}
                </button>
              ))}
            </div>

          </form>
        </div>

        {/* Feature Value Proposition Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white">AI Search Visibility</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Test how effectively ChatGPT, Claude, and Gemini understand your core products and services.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white">Technical SEO Health</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Audit meta tags, canonical links, sitemaps, robots.txt directives, and mobile responsiveness.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white">Actionable Code Fixes</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Receive ready-to-copy HTML & Schema JSON-LD snippets to resolve critical audit issues.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AnalyzePage;
