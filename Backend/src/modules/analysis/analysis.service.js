import normalizeUrl from "../../shared/utils/normalizeUrl.js";
import websiteFetcher from "../../shared/fetchers/websiteFetcher.js";
import htmlParser from "../../shared/parsers/htmlParser.js";
import robotFetcher from "../../shared/fetchers/robotFetcher.js";
import llmsFetcher from "../../shared/fetchers/llmsFetcher.js";
import sitemapFetcher from "../../shared/fetchers/sitemapFetcher.js";

class AnalysisService {

    async analyze(url) {

        const normalizedUrl = normalizeUrl(url);

        const website = await websiteFetcher(normalizedUrl);

        const htmlReport = htmlParser({
            html: website.html,
            finalUrl: website.finalUrl,
        });

        const robots = await robotFetcher(normalizedUrl);
        const llms = await llmsFetcher(normalizedUrl);
        const sitemap = await sitemapFetcher(normalizedUrl);

        return {
            htmlReport,
            robots,
            llms,
            sitemap
        };
    }

}

export default new AnalysisService();