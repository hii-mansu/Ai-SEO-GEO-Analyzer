import { Sparkles, Bot, Search, FileCheck } from "lucide-react";
import Logo from "./Logo";

const LoadingScreen = ({ message = "Analyzing website SEO & GEO readiness..." }) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#090D16] px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
        <Logo showTagline={false} size="lg" className="mb-8" />

        {/* Animated glowing spinner container */}
        <div className="relative flex items-center justify-center my-4">
          <div className="h-20 w-20 animate-spin rounded-full border-4 border-slate-800 border-t-indigo-500 border-r-cyan-400" />
          <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-400">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
        </div>

        <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
          {message}
        </h3>

        <p className="mt-2 text-xs text-slate-400 max-w-xs">
          Scanning HTML structure, meta tags, Schema.org, and LLM visibility benchmarks.
        </p>

        {/* Simulated step indicators */}
        <div className="mt-8 w-full space-y-2.5 text-left border-t border-white/5 pt-6">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <Search className="h-3.5 w-3.5 text-cyan-400 animate-bounce" />
            <span>Crawling target domain & assets</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <Bot className="h-3.5 w-3.5 text-indigo-400" />
            <span>Running AI Search & Answer Engine test</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <FileCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Generating structured audit report</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;