import { Outlet, Link } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl">

        <div className="hidden flex-1 flex-col justify-between border-r border-white/10 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 p-16 lg:flex">

          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              S
            </div>

            <div>

              <h1 className="text-xl font-bold text-white">
                SEO GEO
              </h1>

              <p className="text-sm text-slate-400">
                AI Analyzer
              </p>

            </div>

          </Link>

          <div>

            <span className="rounded-full bg-blue-600/10 px-4 py-2 text-sm text-blue-400">
              AI Powered SEO Platform
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
              Optimize Your Website
              <span className="block text-blue-400">
                For AI Search
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">
              Analyze websites for SEO, GEO and AI readiness with
              professional reports and actionable recommendations.
            </p>

          </div>

          <p className="text-sm text-slate-500">
            © 2026 SEO GEO Analyzer
          </p>

        </div>

        <div className="flex flex-1 items-center justify-center p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;