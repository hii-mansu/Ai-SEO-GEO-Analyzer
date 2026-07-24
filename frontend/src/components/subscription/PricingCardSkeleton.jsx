function PricingCardSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl glass-panel p-8 sm:p-10 border border-slate-800 bg-slate-900/50">
      <div className="h-8 w-36 rounded-lg bg-slate-800" />
      <div className="mt-3 h-4 w-56 rounded bg-slate-800/80" />
      <div className="mt-8 h-12 w-40 rounded-xl bg-slate-800" />
      <div className="my-8 border-t border-slate-800" />
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full bg-slate-800" />
            <div className="h-4 w-full max-w-[200px] rounded bg-slate-800/80" />
          </div>
        ))}
      </div>
      <div className="mt-10 h-12 rounded-xl bg-slate-800" />
    </div>
  );
}

export default PricingCardSkeleton;