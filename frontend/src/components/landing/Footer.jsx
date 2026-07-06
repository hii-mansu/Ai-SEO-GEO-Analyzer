import { Link } from "react-router-dom";
import { Code, Contact, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              S
            </div>

            <div>

              <h3 className="font-bold text-white">
                SEO GEO
              </h3>

              <p className="text-sm text-slate-400">
                AI Analyzer
              </p>

            </div>

          </div>

          <p className="mt-6 leading-7 text-slate-400">
            AI-powered SEO, GEO and AEO platform helping websites rank
            better on Google and AI search engines.
          </p>

        </div>

        <div>

          <h4 className="font-semibold text-white">
            Product
          </h4>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">

            <Link to="/">Home</Link>
            <Link to="/analyze">Analyze</Link>
            <Link to="/pricing">Pricing</Link>

          </div>

        </div>

        <div>

          <h4 className="font-semibold text-white">
            Account
          </h4>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/forgot-password">Forgot Password</Link>

          </div>

        </div>

        <div>

          <h4 className="font-semibold text-white">
            Connect
          </h4>

          <div className="mt-5 flex gap-4">

            <a className="rounded-xl bg-slate-800 p-3 text-white hover:bg-blue-600">
              <Code size={20} />
            </a>

            <a className="rounded-xl bg-slate-800 p-3 text-white hover:bg-blue-600">
              <Contact size={20} />
            </a>

            <a className="rounded-xl bg-slate-800 p-3 text-white hover:bg-blue-600">
              <MessageCircle size={20} />
            </a>

          </div>

        </div>

      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SEO GEO Analyzer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;