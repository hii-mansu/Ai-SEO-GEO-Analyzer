import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

function SubscriptionCard({ plan }) {
  const isPopular = plan.popular;
  const isFree = plan.price === 0;

  return (
    <div
      className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between ${
        isPopular
          ? "glass-panel bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-950 border-2 border-indigo-500/60 shadow-2xl shadow-indigo-500/20 scale-105 z-10"
          : "glass-panel bg-slate-900/50 border border-white/10 hover:border-slate-700"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 right-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-1 text-xs font-extrabold text-slate-950 shadow-lg shadow-indigo-500/30">
          <Sparkles className="h-3.5 w-3.5 fill-slate-950 text-slate-950" />
          <span>Coming Soon</span>
        </div>
      )}

      <div>
        <h3 className="text-2xl font-extrabold text-white tracking-tight">{plan.name}</h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          {isFree
            ? "Ideal for individuals testing site readiness."
            : "For growth teams, agencies & power developers."}
        </p>

        <div className="mt-6 flex items-baseline">
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            ₹{plan.price}
          </span>
          <span className="ml-2 text-xs sm:text-sm font-semibold text-slate-400">
            /{plan.billingCycle || "month"}
          </span>
        </div>

        <div className="my-8 border-t border-slate-800" />

        <div className="space-y-4">
          <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Includes:</p>
          {plan.features?.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {isFree ? (
          <Link to="/register" className="w-full block">
            <Button variant="secondary" size="lg" className="w-full">
              Get Started Free
            </Button>
          </Link>
        ) : (
          <Button variant="primary" size="lg" className="w-full">
            Upgrade Plan Now
          </Button>
        )}
      </div>
    </div>
  );
}

export default SubscriptionCard;