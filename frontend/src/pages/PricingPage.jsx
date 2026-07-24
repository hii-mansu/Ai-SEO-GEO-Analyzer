import PricingSection from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function PricingPage() {
  return (
    <div className="min-h-screen bg-[#090D16]">
      <div className="pt-8">
        <PricingSection />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default PricingPage;