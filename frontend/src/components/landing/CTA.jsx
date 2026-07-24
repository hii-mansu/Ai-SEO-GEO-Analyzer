import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

function CTA() {
  return (
    <section className="relative py-24 bg-[#090D16] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Glow halo */}
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-indigo-500/30 bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 shadow-2xl shadow-indigo-600/20">
          
          <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Instant Domain Diagnostics
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
              Ready to Claim Top Rank on Search & AI Engines?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Start auditing your website in seconds. Get AI recommendations, Schema markup, and LLMs.txt directives right now.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/analyze">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Analyze Your Website Now
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing Plans
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>Instant 10s Scans</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-indigo-400" />
                <span>Zero Installation Required</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;