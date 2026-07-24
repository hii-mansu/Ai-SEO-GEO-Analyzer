import {Router} from "express";
import subscriptionController from "./subscription.controller.js";
import { publicLimiter } from "../../middleware/rateLimiter.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/plans", publicLimiter, subscriptionController.getPlans);

export default subscriptionRouter;