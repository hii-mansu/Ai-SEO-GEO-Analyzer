import PricingCardSkeleton from "../subscription/PricingCardSkeleton";
import SubscriptionCard from "../subscription/SubscriptionCard";
import { useGetPlans } from "../../hooks/useGetPlans";
import SectionHeading from "../common/SectionHeading";

function PricingSection() {
  const { data, isLoading, error } = useGetPlans();

  // Fallback plans if API is loading or offline
  const fallbackPlans = [
    {
      _id: "free-plan",
      name: "Free Developer",
      price: 0,
      billingCycle: "month",
      popular: false,
      features: [
        "2 Domain Audits / day",
        "Basic SEO Technical Checks",
        "OpenGraph & Metadata Scan",
        "Summary Report View",
      ],
    },
    {
      _id: "pro-plan",
      name: "Pro Agency",
      price: 1499,
      billingCycle: "month",
      popular: true,
      features: [
        "Unlimited Domain Audits",
        "GEO & AI Answer Engine Indexing",
        "LLMs.txt & Schema Code Generator",
        "Prioritized Critical Bug Fixes",
        "Exportable PDF/JSON Reports",
        "24/7 Priority Support",
      ],
    },
  ];

  const plansToDisplay = data?.plans?.length ? data.plans : fallbackPlans;

  return (
    <section id="pricing" className="relative py-24 bg-slate-950/80 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transparent Pricing"
          title="Simple Plans for Every Stage"
          subtitle="Start for free and scale as your organic and AI answer engine traffic grows. No hidden setup fees."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto items-stretch">
          {isLoading ? (
            <>
              <PricingCardSkeleton />
              <PricingCardSkeleton />
            </>
          ) : (
            plansToDisplay.map((plan) => (
              <SubscriptionCard key={plan._id} plan={plan} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;