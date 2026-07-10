function PricingCardSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-slate-800 bg-slate-900 p-10">

      <div className="h-8 w-32 rounded bg-slate-800" />

      <div className="mt-4 h-4 w-52 rounded bg-slate-800" />

      <div className="mt-8 h-12 w-36 rounded bg-slate-800" />

      <div className="mt-10 space-y-5">
        {[1,2,3,4,5].map((item)=>(
          <div
            key={item}
            className="h-5 rounded bg-slate-800"
          />
        ))}
      </div>

      <div className="mt-10 h-12 rounded-xl bg-slate-800" />

    </div>
  );
}

export default PricingCardSkeleton;