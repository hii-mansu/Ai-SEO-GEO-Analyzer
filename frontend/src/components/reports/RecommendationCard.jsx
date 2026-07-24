import { Sparkles, Lightbulb } from "lucide-react";

const RecommendationCard = ({ title, description, priority }) => {
  return (
    <div className="rounded-2xl glass-panel p-6 border border-indigo-500/30 bg-indigo-950/20 hover:border-indigo-500/50 transition-all duration-200">
      <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-3.5 mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
            <Lightbulb className="h-4 w-4" />
          </div>
          <h3 className="text-base font-bold text-white tracking-tight">{title}</h3>
        </div>

        {priority && (
          <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-[11px] font-bold text-indigo-300 border border-indigo-500/30 uppercase tracking-wider">
            {priority}
          </span>
        )}
      </div>

      <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
        {description}
      </p>
    </div>
  );
};

export default RecommendationCard;