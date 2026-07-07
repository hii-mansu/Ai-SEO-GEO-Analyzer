import React from 'react'

const Score = ({ title, score }) => {
  return (
    <div>

      <div className="mb-2 flex justify-between">

        <span className="text-slate-300">
          {title}
        </span>

        <span className="font-bold text-white">
          {score}
        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-700">

        <div
          className="h-2 rounded-full bg-blue-500"
          style={{ width: `${score}%` }}
        />

      </div>

    </div>
  );
}

export default Score