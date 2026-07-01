import { Router } from "express";
import analysisController from "./analysis.controller.js";
import requestValidator from "../../middleware/validateRequest.js";
import analysisValidSchema from "./analysis.validator.js";

const analysisRouter = Router();

analysisRouter.post(
    "/",
    requestValidator(analysisValidSchema),
    analysisController.analyze
);

export default analysisRouter;