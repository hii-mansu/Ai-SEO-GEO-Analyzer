import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import ReportPreview from "../components/landing/ReportPreview";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FaQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <ReportPreview />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;