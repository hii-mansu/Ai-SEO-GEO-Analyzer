import React from 'react'

const RecommendationCard = ({
  title,
  description,
  priority
}) => {
  return (
    <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">

        <h2 className="text-lg font-semibold text-blue-500">
        {priority}
      </h2>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        {description}
      </p>

    </div>
  );
}

export default RecommendationCard