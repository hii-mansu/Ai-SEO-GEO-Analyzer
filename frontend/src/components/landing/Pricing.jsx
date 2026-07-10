import PricingCardSkeleton from "../subscription/PricingCardSkeleton";
import SubscriptionCard from "../subscription/SubscriptionCard";
import { useGetPlans } from "../../hooks/useGetPlans";

function PricingSection() {

  const { data, isLoading, error } = useGetPlans();
  console.log(data);

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

          {isLoading && (
            <>
              <PricingCardSkeleton />
              <PricingCardSkeleton />
            </>
          )}

          {error && (
            <>
              <PricingCardSkeleton />
              <PricingCardSkeleton />
            </>
          )}

          {!isLoading &&
            !error &&
            data.plans.map((plan) => (
              <SubscriptionCard
                key={plan._id}
                plan={plan}
              />
            ))}

        </div>

      </div>
    </section>
  );
}

export default PricingSection;