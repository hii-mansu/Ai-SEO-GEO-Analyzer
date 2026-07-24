function Score({ title, score }) {
  const isHigh = score >= 80;
  const isMedium = score >= 60 && score < 80;

  const color = isHigh
    ? "from-emerald-400 to-teal-500 text-emerald-400"
    : isMedium
    ? "from-amber-400 to-orange-500 text-amber-400"
    : "from-rose-500 to-red-600 text-rose-400";

  const barGradient = isHigh
    ? "from-emerald-500 via-teal-400 to-cyan-400"
    : isMedium
    ? "from-amber-500 to-orange-400"
    : "from-rose-600 to-red-500";

  return (
    <div className="rounded-2xl bg-slate-900/80 p-4 border border-slate-800">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-300">{title}</span>
        <span className={`text-base font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {score}/100
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-950 p-0.5 border border-white/5">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barGradient} transition-all duration-1000`}
          style={{ width: `${Math.min(100, Math.max(0, score))}%` }}
        />
      </div>
    </div>
  );
}

export default Score;