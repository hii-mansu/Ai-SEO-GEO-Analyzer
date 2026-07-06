import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SEO GEO Analyzer?",
    answer:
      "SEO GEO Analyzer is an AI-powered platform that analyzes your website for SEO, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and technical issues, providing actionable recommendations to improve visibility.",
  },
  {
    question: "How does the analysis work?",
    answer:
      "Simply enter your website URL, and our AI scans your website, evaluates technical SEO, content quality, AI readiness, and generates a detailed report within seconds.",
  },
  {
    question: "Is the free plan really free?",
    answer:
      "Yes. You can analyze one website per day without creating an account. Registered users receive five free analyses per day.",
  },
  {
    question: "What search engines and AI platforms are supported?",
    answer:
      "Our recommendations help optimize your website for Google Search as well as AI-powered search platforms like ChatGPT, Gemini, Claude, and other answer engines.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. Every issue includes a clear explanation, why it matters, and practical recommendations that anyone can follow.",
  },
  {
    question: "Will my website data be stored?",
    answer:
      "Analysis results are stored only for authenticated users. Guest users receive their report without permanently storing the analysis.",
  },
];

function FaQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            Answers to the most common questions about SEO GEO Analyzer.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-white/10 px-6 py-5 text-slate-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FaQ;