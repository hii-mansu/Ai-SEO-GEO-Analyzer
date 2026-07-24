const SectionTitle = ({ icon, title, count }) => {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mt-8 mb-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-indigo-400">
          {icon}
        </div>
        <h2 className="text-xl font-bold tracking-tight text-white">{title}</h2>
      </div>

      {count !== undefined && (
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400 border border-slate-800">
          {count}
        </span>
      )}
    </div>
  );
};

export default SectionTitle;