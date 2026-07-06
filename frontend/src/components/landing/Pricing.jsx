import { Check } from "lucide-react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Simple & Transparent
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Start free. Upgrade when you need more analyses.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-10">

            <h3 className="text-3xl font-bold text-white">
              Free
            </h3>

            <p className="mt-2 text-slate-400">
              Perfect for trying the platform.
            </p>

            <div className="mt-8 text-5xl font-bold text-white">
              ₹0
            </div>

            <div className="mt-10 space-y-5">

              <Feature text="1 analysis/day (Guest)" />
              <Feature text="5 analyses/day (Registered)" />
              <Feature text="AI SEO Report" />
              <Feature text="GEO Analysis" />
              <Feature text="Technical SEO Audit" />

            </div>

            <Link
              to="/register"
              className="mt-10 block rounded-xl bg-blue-600 py-4 text-center font-semibold text-white hover:bg-blue-700"
            >
              Get Started
            </Link>

          </div>

          <div className="relative rounded-3xl border-2 border-blue-600 bg-slate-900 p-10">

            <div className="absolute right-8 top-8 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Coming Soon
            </div>

            <h3 className="text-3xl font-bold text-white">
              Pro
            </h3>

            <p className="mt-2 text-slate-400">
              For professionals and agencies.
            </p>

            <div className="mt-8 text-5xl font-bold text-white">
              ₹299
              <span className="text-lg text-slate-400">
                /month
              </span>
            </div>

            <div className="mt-10 space-y-5">

              <Feature text="Unlimited Analysis" />
              <Feature text="Priority AI Processing" />
              <Feature text="Analysis History" />
              <Feature text="Export Reports" />
              <Feature text="Upcoming Premium Features" />

            </div>

            <button className="mt-10 w-full rounded-xl border border-blue-500 py-4 font-semibold text-blue-400">
              Coming Soon
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <Check className="text-green-400" size={20} />
      <span className="text-slate-300">{text}</span>
    </div>
  );
}

export default Pricing;