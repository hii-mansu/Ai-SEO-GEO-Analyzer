import React from 'react'

const StrengthCard = ({text}) => {
  return (
    <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5 text-green-300">
      {text}
    </div>
  );
}

export default StrengthCard