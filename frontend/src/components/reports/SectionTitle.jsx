import React from 'react'

const SectionTitle = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3">

      {icon}

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle