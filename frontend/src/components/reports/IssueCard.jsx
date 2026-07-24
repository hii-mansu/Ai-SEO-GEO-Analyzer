import { AlertTriangle, AlertCircle, ArrowRight } from "lucide-react";

const IssueCard = ({ title, priority, reason, solution, color }) => {
  const isCritical = color === "red" || priority?.toLowerCase() === "high";

  return (
    <div className={`rounded-2xl glass-panel p-6 border transition-all duration-200 ${
      isCritical
        ? "border-rose-500/30 bg-rose-950/10 hover:border-rose-500/50"
        : "border-amber-500/30 bg-amber-950/10 hover:border-amber-500/50"
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${
            isCritical ? "bg-rose-500/15 text-rose-400" : "bg-amber-500/15 text-amber-400"
          }`}>
            {isCritical ? <AlertTriangle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
          </div>
          <h3 className="text-base font-bold text-white tracking-tight">{title}</h3>
        </div>

        <span className={`self-start sm:self-auto inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${
          isCritical
            ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
            : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
        }`}>
          {priority || (isCritical ? "Critical" : "Warning")}
        </span>
      </div>

      <div className="mt-4 space-y-3 text-xs sm:text-sm">
        <div>
          <span className="font-bold text-slate-300">Issue Diagnosis:</span>
          <p className="mt-1 text-slate-300 leading-relaxed">{reason}</p>
        </div>

        {solution && (
          <div className="rounded-xl bg-slate-900/90 p-4 border border-slate-800">
            <span className="font-bold text-indigo-300 flex items-center gap-1.5 mb-1.5">
              <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
              Recommended Solution:
            </span>
            <p className="text-slate-300 leading-relaxed font-mono text-xs">{solution}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueCard;