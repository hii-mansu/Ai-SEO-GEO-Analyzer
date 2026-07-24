import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

function Logo({ className = "", showTagline = true, size = "md" }) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      {/* Glowing Icon Container */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/40 ${
        isSmall ? "h-8 w-8" : isLarge ? "h-12 w-12" : "h-10 w-10"
      }`}>
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950 font-black tracking-wider text-white">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            S
          </span>
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-[8px] text-white">
          <Sparkles className="h-2 w-2 text-white" />
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors ${
            isSmall ? "text-base" : isLarge ? "text-xl" : "text-lg"
          }`}>
            SEO GEO
          </span>
          <span className="rounded-full bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20">
            AI
          </span>
        </div>
        {showTagline && (
          <span className={`-mt-0.5 font-medium tracking-wide text-slate-400 ${
            isSmall ? "text-[10px]" : "text-xs"
          }`}>
            Answer Engine Optimization
          </span>
        )}
      </div>
    </Link>
  );
}

export default Logo;
