import {
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Globe,
  ArrowLeft,
  Share2,
  Printer,
} from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import RecommendationCard from "../components/reports/RecommendationCard";
import StrengthCard from "../components/reports/StrengthCard";
import IssueCard from "../components/reports/IssueCard";
import Score from "../components/reports/Score";
import SectionTitle from "../components/reports/SectionTitle";
import Button from "../components/common/Button";

function ReportPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Fallback demo report if page accessed directly without state
  const reportData = state?.report || {
    scores: { seo: 88, geo: 92, overall: 90 },
    summary:
      "Website demonstrates strong overall technical SEO infrastructure. High potential for Generative Engine citations with recommended addition of Schema Organization markup and an llms.txt protocol manifest file.",
    warnings: [
      {
        title: "Missing Open Graph Image Tag",
        priority: "Medium",
        red: "amber",
        reason: "Social sharing links on Twitter/LinkedIn lack explicit og:image thumbnail preview.",
        solution: "Add `<meta property='og:image' content='https://example.com/og.jpg' />` into the <head> block.",
      },
    ],
    criticalIssues: [
      {
        title: "Missing /llms.txt Directives Manifest",
        priority: "High",
        red: "red",
        reason: "Generative AI engines (ChatGPT, Claude) lack structured markdown index for priority domain knowledge.",
        solution: "Create a root `/llms.txt` file listing main product documentation and API endpoints.",
      },
    ],
    strengths: [
      "Valid HTTPS SSL encryption enabled",
      "Fast server response speed (<250ms)",
      "Mobile responsive viewport tags verified",
      "Valid robots.txt and sitemap.xml directives",
    ],
    recommendations: [
      {
        title: "Implement Schema.org JSON-LD WebSite SearchAction",
        description:
          "Inject structured JSON-LD into your homepage to qualify for Google Sitelinks Search Box and AI entity linking.",
        priority: "High Priority",
      },
      {
        title: "Add Semantic HTML5 Content Markers",
        description:
          "Use <article>, <main>, and <header> elements to assist LLM parsers in isolating primary content from navigation bars.",
        priority: "Medium Priority",
      },
    ],
  };

  const domainName = state?.url
    ? state.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "Analyzed Domain";

  return (
    <section className="relative min-h-screen bg-[#090D16] px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              icon={ArrowLeft}
              onClick={() => navigate("/analyze")}
            >
              Back to Scan
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-indigo-400" />
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {domainName}
                </h1>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  {state?.message || "Audit Complete"}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                AI Answer Engine & Technical SEO Audit Report
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={Printer}
              onClick={() => window.print()}
            >
              Print / PDF
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={Share2}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Report URL copied to clipboard!");
              }}
            >
              Share Report
            </Button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Column - Scores & Executive Summary */}
          <div className="space-y-6 lg:col-span-4 lg:sticky lg:top-24">
            
            {/* Scorecard Container */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
                Overall Audit Scores
              </h3>

              <Score title="SEO Technical Score" score={reportData.scores?.seo || 85} />
              <Score title="GEO AI Search Readiness" score={reportData.scores?.geo || 90} />
              <Score title="Overall Audit Score" score={reportData.scores?.overall || 88} />
            </div>

            {/* AI Summary Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Executive AI Summary</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {reportData.summary}
              </p>
            </div>

            {/* Quick Actions Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Audit Actions
              </h4>
              <Link to="/analyze" className="block w-full">
                <Button variant="primary" size="md" className="w-full">
                  Run Another Scan
                </Button>
              </Link>
            </div>

          </div>

          {/* Right Column - Audit Sections */}
          <div className="space-y-6 lg:col-span-8">
            
            {/* Critical Issues */}
            {reportData.criticalIssues?.length > 0 && (
              <div>
                <SectionTitle
                  icon={<AlertTriangle className="h-5 w-5 text-rose-400" />}
                  title="Critical Issues"
                  count={reportData.criticalIssues.length}
                />
                <div className="space-y-4">
                  {reportData.criticalIssues.map((issue, index) => (
                    <IssueCard
                      key={index}
                      title={issue.title}
                      priority={issue.priority}
                      color={issue.red || "red"}
                      reason={issue.reason}
                      solution={issue.solution}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Warnings */}
            {reportData.warnings?.length > 0 && (
              <div>
                <SectionTitle
                  icon={<AlertCircle className="h-5 w-5 text-amber-400" />}
                  title="Warnings & Improvements"
                  count={reportData.warnings.length}
                />
                <div className="space-y-4">
                  {reportData.warnings.map((issue, index) => (
                    <IssueCard
                      key={index}
                      title={issue.title}
                      priority={issue.priority}
                      color={issue.red || "amber"}
                      reason={issue.reason}
                      solution={issue.solution}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Strengths */}
            {reportData.strengths?.length > 0 && (
              <div>
                <SectionTitle
                  icon={<CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                  title="Passed Checks & Strengths"
                  count={reportData.strengths.length}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  {reportData.strengths.map((text, index) => (
                    <StrengthCard key={index} text={text} />
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {reportData.recommendations?.length > 0 && (
              <div>
                <SectionTitle
                  icon={<Sparkles className="h-5 w-5 text-indigo-400" />}
                  title="AI Actionable Recommendations"
                  count={reportData.recommendations.length}
                />
                <div className="space-y-4">
                  {reportData.recommendations.map((recommendation, index) => (
                    <RecommendationCard
                      key={index}
                      title={recommendation.title}
                      description={recommendation.description}
                      priority={recommendation.priority}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ReportPage;
