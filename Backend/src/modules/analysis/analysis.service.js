import normalizeUrl from "../../shared/utils/normalizeUrl.js";
import websiteFetcher from "../../shared/fetchers/websiteFetcher.js";
import robotFetcher from "../../shared/fetchers/robotFetcher.js";
import llmsFetcher from "../../shared/fetchers/llmsFetcher.js";
import sitemapFetcher from "../../shared/fetchers/sitemapFetcher.js";
import htmlParser from "../../shared/parsers/htmlParser.js";
import seoParser from "../../shared/parsers/seoParser.js";
import buildAiInput from "../../shared/ai/aiInputs.js";
import analyzeWebsite from "../../shared/ai/llm.js";
import Analysis from "./analysis.model.js";
import AppError from "../../shared/errors/appError.js";
import redisClient from "../../shared/redis/redisClient.js";

class AnalysisService {
  async analyze(url, user) {
    const isAuthenticated = user !== null;

    if (isAuthenticated) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const count = await Analysis.countDocuments({
        user: user._id,
        createdAt: {
          $gte: today,
          $lt: tomorrow,
        },
      });
      if (count >= 5) {
        throw new AppError("You have reached your daily limit.", 429);
      }
    }

    const normalizedUrl = normalizeUrl(url);

    const cachedAnalysis = await redisClient.get(`analysis:${normalizedUrl}`);
    if (cachedAnalysis) {
      console.log("Analysis cache hitted.");
      return JSON.parse(cachedAnalysis);
    }

    console.log("Analysis cache missed.");

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
      report: inputForPrompt,
      url: website.finalUrl,
    });

    await redisClient.set(
      `analysis:${normalizedUrl}`,
      JSON.stringify(finalAiAnalysis),
      {
        EX: 60 * 60 * 24,
      },
    );

    if (isAuthenticated) {
      try {
        await Analysis.create({
          user: user._id,
          url,
          normalizedUrl,
          status: "completed",
          score: finalAiAnalysis.scores,
          report: finalAiAnalysis,
        });
      } catch (error) {
        console.error("Failed to save analysis:", error);
      }
    }

    return finalAiAnalysis;
  }
}

export default new AnalysisService();
