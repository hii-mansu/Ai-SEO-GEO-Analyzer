import normalizeUrl from "../../shared/utils/normalizeUrl.js";
import websiteFetcher from "../../shared/fetchers/websiteFetcher.js";
import htmlParser from "../../shared/parsers/htmlParser.js";

class AnalysisService {

    async analyze(url) {

        const normalizedUrl = normalizeUrl(url);

        const website = await websiteFetcher(normalizedUrl);

        const report = htmlParser({
            html: website.html,
            finalUrl: website.finalUrl,
        });

        return report;
    }

}

export default new AnalysisService();