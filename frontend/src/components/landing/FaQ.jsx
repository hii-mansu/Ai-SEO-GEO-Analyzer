import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const faqs = [
  {
    question: "What is SEO GEO Analyzer?",
    answer:
      "SEO GEO Analyzer is an AI-driven website diagnostic platform designed to evaluate traditional organic SEO alongside Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). It provides actionable recommendations so your website ranks high on Google and gets cited in ChatGPT, Gemini, and Perplexity.",
  },
  {
    question: "What makes GEO & AEO optimization different from normal SEO?",
    answer:
      "Traditional SEO focuses on keywords and backlinks for search result pages. GEO (Generative Engine Optimization) optimizes content structure, entity relationships, Schema markup, and /llms.txt directives so AI models can synthesize, cite, and reference your business directly in conversational answers.",
  },
  {
    question: "How fast is the website audit scan?",
    answer:
      "Scans take less than 10 seconds. Our high-throughput crawler fetches HTML content, inspects head tags, checks Schema.org JSON-LD scripts, evaluates AI accessibility, and runs real-time rule checks.",
  },
  {
    question: "Do I need coding knowledge to fix identified issues?",
    answer:
      "No. Each report provides clear explanations, priority levels, and ready-to-copy code fixes (such as JSON-LD schema blocks or meta tags) that you or your web designer can paste directly into your site.",
  },
  {
    question: "Is there a free trial or free scan tier?",
    answer:
      "Yes! You can run free scans instantly without entering payment information. Free accounts get regular daily scan credits.",
  },
];

function FaQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 bg-[#090D16]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about SEO GEO Analyzer, AI citations, and website diagnostics."
        />

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "glass-panel border-indigo-500/40 shadow-lg shadow-indigo-500/10"
                    : "glass-panel border-white/5 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-white pr-4">
                    <HelpCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-slate-300 border border-slate-800 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-indigo-600 text-white border-indigo-500" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-800/80 px-6 py-5 text-sm text-slate-300 leading-relaxed bg-slate-950/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaQ;