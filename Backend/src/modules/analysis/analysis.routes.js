import { Router } from "express";
import analysisController from "./analysis.controller.js";
import requestValidator from "../../middleware/validateRequest.js";
import { analysisSchema } from "./analysis.validator.js";

const analysisRouter = Router();

analysisRouter.post(
    "/",
    requestValidator(analysisSchema),
    analysisController.analyze
);

export default analysisRouter;