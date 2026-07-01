import asyncHandler from "../../shared/utils/asyncHandler.js";
import analysisService from "./analysis.service.js";

class AnalysisController {

    analyze = asyncHandler(async (req, res) => {

        const report = await analysisService.analyze(req.body.url);

        res.status(200).json({
            success: true,
            message: "Analysis completed successfully.",
            report,
        });

    });

}

export default new AnalysisController();