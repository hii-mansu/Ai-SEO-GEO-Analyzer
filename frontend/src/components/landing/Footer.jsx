import { Link, useLocation, useNavigate } from "react-router-dom";
import { Code, Globe, MessageCircle, Sparkles } from "lucide-react";
import Logo from "../common/Logo";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060911] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              AI-powered website audit platform engineered for traditional search engines and next-generation Answer Engines (ChatGPT, Gemini, Perplexity).
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition">
                <Code className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/analyze" className="hover:text-white transition">Website Scan</Link>
              </li>
              <li>
                <a href="#features" onClick={handleSectionClick("features")} className="hover:text-white transition cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition">Pricing Plans</Link>
              </li>
              <li>
                <a href="#faq" onClick={handleSectionClick("faq")} className="hover:text-white transition cursor-pointer">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Account</h4>
            <ul className="mt-4 space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/login" className="hover:text-white transition">Sign In</Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white transition">Register Account</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white transition">My Profile</Link>
              </li>
              <li>
                <Link to="/forgot-password" className="hover:text-white transition">Password Reset</Link>
              </li>
            </ul>
          </div>

          {/* Technology Badge */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Optimized For</h4>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
              <span className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-300">Google SEO</span>
              <span className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-300">ChatGPT</span>
              <span className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-300">Gemini</span>
              <span className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-300">Perplexity</span>
              <span className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-indigo-300">llms.txt</span>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SEO GEO Analyzer. All rights reserved.</p>
          <div className="flex items-center gap-1 text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Built with AI Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;