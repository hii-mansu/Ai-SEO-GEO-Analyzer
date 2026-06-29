import {Router} from "express";
import authController from "./auth.controller.js";
import requestValidator from "../../middleware/validateRequest.js";
import { registerSchema, loginSchema } from "./auth.validator.js";

const authRouter = Router();

authRouter.post("/register", requestValidator(registerSchema), authController.register);
authRouter.post("/login", requestValidator(loginSchema), authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;