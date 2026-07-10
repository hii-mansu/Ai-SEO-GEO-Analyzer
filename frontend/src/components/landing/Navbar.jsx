import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, CircleUserRound } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import LoadingScreen from '.././common/LoadingScreen';

function Navbar() {
  const [open, setOpen] = useState(false);

  const {user, meLoading, logoutUser} = useAuth();

  if(meLoading){
    return <LoadingScreen/>
  }


  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            S
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              SEO GEO
            </h1>

            <p className="-mt-1 text-xs text-slate-400">
              AI Analyzer
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/#features"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="/#pricing"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="/#faq"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            FAQ
          </a>
        </nav>

        <div className="relative hidden items-center gap-3 md:flex">
          {!user ? (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => setOpen(!open)}
                className="rounded-full transition hover:scale-105"
              >
                <CircleUserRound
                  size={38}
                  className="text-slate-300 hover:text-white"
                />
              </button>

              {open && (
                <div className="absolute right-0 top-14 w-72 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

                  <div className="bg-slate-800/50 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <CircleUserRound
                        size={42}
                        className="text-slate-300"
                      />

                      <div>
                        <h3 className="font-semibold text-white">
                          Himanshu Singh
                        </h3>

                        <p className="text-sm text-slate-400">
                          himanshu@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">

                    <Link
                      to="/profile"
                      className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/settings"
                      className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                      Settings
                    </Link>

                    <hr className="my-2 border-slate-800" />

                    <button
                    onClick={()=>logoutUser()}
                      className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10"
                    >
                      Logout
                    </button>

                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <button className="text-white md:hidden">
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
}

export default Navbar;