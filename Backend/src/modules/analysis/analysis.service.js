import normalizeUrl from "../../shared/utils/normalizeUrl.js";
import websiteFetcher from "../../shared/fetchers/websiteFetcher.js";
import htmlParser from "../../shared/parsers/htmlParser.js";

class AnalysisService {

    async analyze(url) {

        // Normalize URL
        const normalizedUrl = normalizeUrl(url);

        // Fetch Website
        const website = await websiteFetcher(normalizedUrl);

        // Parse HTML
        const report = htmlParser({
            html: website.html,
            finalUrl: website.finalUrl,
        });

        return report;
    }

}

export default new AnalysisService();