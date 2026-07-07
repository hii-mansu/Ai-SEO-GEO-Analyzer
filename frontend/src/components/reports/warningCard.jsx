import React from 'react'

const warningCard = ({
  title,
  priority,
  reason,
  solution,
  color,
}) => {
    const badge =
    color === "red"
      ? "bg-red-500/20 text-red-400"
      : "bg-yellow-500/20 text-yellow-400";
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}>
          {priority}
        </span>

      </div>

      <h4 className="mt-4 leading-7 text-red-400">
        {reason}
      </h4>
      <p className="mt-4 leading-7 text-slate-400">
        {solution}
      </p>

    </div>
  );
}

export default warningCard