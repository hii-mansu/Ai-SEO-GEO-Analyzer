import {
  CircleAlert,
  CircleCheck,
  TriangleAlert,
  Sparkles,
  Globe,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import RecommendationCard from "../components/reports/RecommendationCard";
import StrengthCard from "../components/reports/StrengthCard";
import IssueCard from "../components/reports/IssueCard";
import Score from "../components/reports/Score";
import SectionTitle from "../components/reports/SectionTitle";

function ReportPage() {
  const { state } = useLocation();
  const report = state.report;
  console.log("State",state);
  console.log("Report",report);

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="space-y-6 lg:w-80">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <div className="flex items-center gap-3">
                <Globe className="text-blue-400" />

                <div>
                  <p className="font-semibold text-white">openai.com</p>

                  <p className="text-sm text-slate-500">
                    {state.message || "Completed"}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <Score title="SEO Score" score={report.scores.seo} />

                <Score title="GEO Score" score={report.scores.geo} />

                <Score title="Overall" score={report.scores.overall} />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h3 className="font-semibold text-white">Summary</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {report.summary}
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-8">

            <SectionTitle
              icon={<CircleAlert className="text-red-400" />}
              title="Warnings"
            />

                        {
            report.warnings.map((issue, index) => (
               <IssueCard
                 key={index} 
                 title={issue.title}
                 priority={issue.priority}
                 color={issue.red}
                 reason={issue.reason}
                 solution={issue.solution}
               />
            ))
            }


            <SectionTitle
              icon={<CircleAlert className="text-red-400" />}
              title="Critical Issues"
            />

            {
            report.criticalIssues.map((issue) => (
              <IssueCard
                title={issue.title}
                priority={issue.priority}
                color={issue.red}
                reason={issue.reason}
                solution={issue.solution}
              />
            ))
            }

            <SectionTitle
              icon={<CircleCheck className="text-green-400" />}
              title="Strengths"
            />

            {
              report.strengths.map((txt)=>(
                <StrengthCard text={txt} />
              ))
            }

            <SectionTitle
              icon={<Sparkles className="text-blue-400" />}
              title="Recommendations"
            />

            {
              report.recommendations.map((recommendation)=>(
                <RecommendationCard
              title={recommendation.title}
              description={recommendation.description}
              priority={recommendation.priority}
            />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportPage;
