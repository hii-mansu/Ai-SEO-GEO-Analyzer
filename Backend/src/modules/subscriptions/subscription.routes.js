import {Router} from "express";
import subscriptionController from "./subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/plans", subscriptionController.getPlans);

export default subscriptionRouter;