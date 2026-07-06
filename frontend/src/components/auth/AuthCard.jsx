function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

      <h1 className="text-3xl font-bold text-white">
        {title}
      </h1>

      <p className="mt-2 text-slate-400">
        {subtitle}
      </p>

      <div className="mt-8">
        {children}
      </div>

    </div>
  );
}

export default AuthCard;