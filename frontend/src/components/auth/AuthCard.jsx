import Logo from "../common/Logo";

function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Top ambient glow line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500" />

      {/* Brand Logo Header */}
      <div className="mb-6 flex justify-center">
        <Logo showTagline={false} size="md" />
      </div>

      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{title}</h1>
        {subtitle && <p className="mt-2 text-xs sm:text-sm text-slate-400">{subtitle}</p>}
      </div>

      <div className="mt-8">{children}</div>
    </div>
  );
}

export default AuthCard;