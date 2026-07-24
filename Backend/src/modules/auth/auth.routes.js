import {Router} from "express";
import authController from "./auth.controller.js";
import requestValidator from "../../middleware/validateRequest.js";
import { registerSchema, loginSchema, forgetPassSchema, resetPassSchema } from "./auth.validator.js";
import verifyRefreshToken from "../../middleware/verifyRefreshToken.js";
import verifyAccessToken from "../../middleware/verifyAccessToken.js";
import { forgotPasswordLimiter, loginLimiter, refreshLimiter, registerLimiter } from "../../middleware/rateLimiter.js";

const authRouter = Router();

authRouter.post("/register", registerLimiter, requestValidator(registerSchema), authController.register);
authRouter.post("/login", loginLimiter, requestValidator(loginSchema), authController.login);
authRouter.get("/me", verifyAccessToken, authController.me);
authRouter.post("/refresh", refreshLimiter, verifyRefreshToken, authController.accessTokenGen);
authRouter.post("/logout", verifyAccessToken, authController.logout);
authRouter.post("/forget", forgotPasswordLimiter, requestValidator(forgetPassSchema), authController.forgetPass);
authRouter.post("/reset", requestValidator(resetPassSchema), authController.resetPass);

export default authRouter;