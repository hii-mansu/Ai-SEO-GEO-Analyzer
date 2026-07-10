import { Check } from "lucide-react";
import { Link } from "react-router-dom";

function subscriptionCard({ plan }) {
  return (
    <div
      className={`relative rounded-3xl bg-slate-900 p-10 transition hover:-translate-y-1 ${
        plan.popular
          ? "border-2 border-blue-600"
          : "border border-white/10"
      }`}
    >
      {plan.popular && (
        <div className="absolute right-8 top-8 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </div>
      )}

      <h3 className="text-3xl font-bold text-white">
        {plan.name}
      </h3>

      <p className="mt-2 text-slate-400">
        {plan.name === "Free"
          ? "Perfect for getting started."
          : "Best for professionals and agencies."}
      </p>

      <div className="mt-8 text-5xl font-bold text-white">
        ₹{plan.price}

        <span className="ml-2 text-lg font-normal text-slate-400">
          /{plan.billingCycle}
        </span>
      </div>

      <div className="mt-10 space-y-5">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <Check
              size={20}
              className="text-green-400"
            />

            <span className="text-slate-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {plan.price === 0 ? (
        <Link
          to="/register"
          className="mt-10 block rounded-xl bg-blue-600 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          Get Started
        </Link>
      ) : (
        <button className="mt-10 w-full rounded-xl border border-blue-600 py-4 font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white">
          Upgrade
        </button>
      )}
    </div>
  );
}

export default subscriptionCard;