import normalizeUrl from "../../shared/utils/normalizeUrl.js";
import websiteFetcher from "../../shared/fetchers/websiteFetcher.js";
import robotFetcher from "../../shared/fetchers/robotFetcher.js";
import llmsFetcher from "../../shared/fetchers/llmsFetcher.js";
import sitemapFetcher from "../../shared/fetchers/sitemapFetcher.js";
import htmlParser from "../../shared/parsers/htmlParser.js";
import seoParser from "../../shared/parsers/seoParser.js";
import buildAiInput from "../../shared/ai/aiInputs.js";
import analyzeWebsite from "../../shared/ai/llm.js";

class AnalysisService {
  async analyze(url) {
    const normalizedUrl = normalizeUrl(url);

    const website = await websiteFetcher(normalizedUrl);

    const htmlReport = htmlParser({
      html: website.html,
      finalUrl: website.finalUrl,
    });

    const seoReport = seoParser(website.html);

    const robots = await robotFetcher(normalizedUrl);
    const llms = await llmsFetcher(normalizedUrl);
    const sitemap = await sitemapFetcher(normalizedUrl);

    const report = {
      ...htmlReport,
      ...seoReport,
      robots,
      llms,
      sitemap,
    };

    const inputForPrompt = buildAiInput(report);

    const finalAiAnalysis = await analyzeWebsite({
      report:inputForPrompt,
      url:website.finalUrl
    });

    return finalAiAnalysis;
  }
}

export default new AnalysisService();
