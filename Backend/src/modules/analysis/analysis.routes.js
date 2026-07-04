import { Router } from "express";
import analysisController from "./analysis.controller.js";
import requestValidator from "../../middleware/validateRequest.js";
import analysisValidSchema from "./analysis.validator.js";
import optionalAuth from "../../middleware/optionalAuth.js";
import analysisLimit from "../../middleware/analysisLimit.js";

const analysisRouter = Router();

analysisRouter.post(
    "/",
    optionalAuth,
    analysisLimit,
    requestValidator(analysisValidSchema),
    analysisController.analyze
);

export default analysisRouter;