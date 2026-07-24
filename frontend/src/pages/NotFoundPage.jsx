import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import Button from "../components/common/Button";

function NotFoundPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#090D16] px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 glass-panel max-w-lg p-10 rounded-3xl border border-white/10 text-center shadow-2xl space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Compass className="h-8 w-8 animate-pulse" />
        </div>

        <h1 className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-white">Page Not Found</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
            The page you are looking for does not exist, has been removed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-4">
          <Link to="/">
            <Button variant="primary" size="lg" icon={ArrowLeft}>
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;