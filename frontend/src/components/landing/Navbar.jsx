import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Sparkles, ChevronDown, Compass, Shield } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../common/Logo";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, meLoading, logoutUser } = useAuth();
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Smooth Section Scroll Handler across routes
  const handleSectionClick = (sectionId) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#090D16]/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/60 px-4 py-1.5 backdrop-blur-md md:flex">
          <Link
            to="/analyze"
            className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
          >
            <Compass className="h-3.5 w-3.5 text-indigo-400" />
            Analyze Domain
          </Link>

          <a
            href="#features"
            onClick={handleSectionClick("features")}
            className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white cursor-pointer"
          >
            Features
          </a>

          <Link
            to="/pricing"
            className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
          >
            Pricing
          </Link>

          <a
            href="#faq"
            onClick={handleSectionClick("faq")}
            className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white cursor-pointer"
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons / User Menu */}
        <div className="hidden items-center gap-3 md:flex">
          {!user ? (
            <>
              <Link
                to="/login"
                className="rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-800/80 hover:text-white"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:shadow-indigo-500/40 active:scale-95"
              >
                <span>Get Started Free</span>
                <Sparkles className="h-3.5 w-3.5 text-cyan-200 transition-transform group-hover:rotate-12" />
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-1.5 pr-3 transition-all hover:border-slate-700 hover:bg-slate-800/90 focus:outline-none cursor-pointer"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 font-bold text-white shadow-sm text-xs">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="max-w-[120px] truncate text-xs font-semibold text-slate-200">
                  {user.name || "My Account"}
                </span>
                <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* User Dropdown Card */}
              {dropdownOpen && (
                <div className="absolute right-0 top-14 z-50 w-72 overflow-hidden rounded-2xl border border-slate-800 bg-[#0F172A] p-2 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="rounded-xl bg-slate-900/90 p-3.5 border border-white/5">
                    <p className="text-xs font-bold text-white truncate">{user.name}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400 truncate">{user.email}</p>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20">
                      <Shield className="h-3 w-3" />
                      <span>{user.plan === "free" ? "Free Tier" : "Pro Tier"}</span>
                    </div>
                  </div>

                  <div className="mt-1 space-y-0.5">
                    <Link
                      to="/profile"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                      <User className="h-4 w-4 text-indigo-400" />
                      Account Profile
                    </Link>

                    <Link
                      to="/analyze"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                      <Compass className="h-4 w-4 text-cyan-400" />
                      New Website Scan
                    </Link>

                    <div className="my-1 border-t border-slate-800" />

                    <button
                      onClick={() => logoutUser()}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-rose-400 transition hover:bg-rose-500/10 cursor-pointer"
                    >
                      <LogOut className="h-4 w-4 text-rose-400" />
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#090D16]/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              to="/analyze"
              className="flex items-center gap-2 rounded-xl bg-indigo-600/10 border border-indigo-500/20 px-4 py-3 text-sm font-semibold text-indigo-300"
            >
              <Compass className="h-4 w-4 text-indigo-400" />
              Analyze Domain
            </Link>

            <a
              href="#features"
              onClick={handleSectionClick("features")}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800"
            >
              Features
            </a>

            <Link
              to="/pricing"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800"
            >
              Pricing
            </Link>

            <a
              href="#faq"
              onClick={handleSectionClick("faq")}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800"
            >
              FAQ
            </a>

            <div className="my-2 border-t border-slate-800" />

            {!user ? (
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/login"
                  className="w-full text-center rounded-xl border border-slate-800 px-4 py-3 text-sm font-semibold text-slate-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30"
                >
                  Get Started Free
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <p className="text-sm font-bold text-white">{user.name}</p>
                  <p className="text-xs text-slate-400">{user.email}</p>
                </div>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800"
                >
                  <User className="h-4 w-4 text-indigo-400" />
                  Account Profile
                </Link>
                <button
                  onClick={() => logoutUser()}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-rose-400 hover:bg-rose-500/10"
                >
                  <LogOut className="h-4 w-4" />
                  Log Out
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;