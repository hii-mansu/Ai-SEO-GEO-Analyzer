import env from "../../config/env.js";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import analysisService from "./analysis.service.js";
import jwt from 'jsonwebtoken';

class AnalysisController {
  analyze = asyncHandler(async (req, res) => {
    const report = await analysisService.analyze(req.body.url, req.user);

    if (!req.user || req.user===null) {
      const token = jwt.sign({ used: true }, env.JWT_ACCESS_SECRET, {
        expiresIn: "1d",
      });

      const isProduction = env.NODE_ENV === "production" || env.NODE_ENV === "prod";

      res.cookie("guest_analysis", token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });
    }

    res.status(200).json({
      success: true,
      message: "Analysis completed successfully.",
      report,
    });
  });
}

export default new AnalysisController();
