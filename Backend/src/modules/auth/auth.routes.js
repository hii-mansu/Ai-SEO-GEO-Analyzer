import {Router} from "express";
import authController from "./auth.controller.js";
import requestValidator from "../../middleware/validateRequest.js";
import { registerSchema, loginSchema, forgetPassSchema, resetPassSchema } from "./auth.validator.js";
import verifyRefreshToken from "../../middleware/verifyRefreshToken.js";
import verifyAccessToken from "../../middleware/verifyAccessToken.js";

const authRouter = Router();

authRouter.post("/register", requestValidator(registerSchema), authController.register);
authRouter.post("/login", requestValidator(loginSchema), authController.login);
authRouter.get("/me", verifyAccessToken, authController.me);
authRouter.post("/refresh", verifyRefreshToken, authController.accessTokenGen);
authRouter.post("/logout", verifyAccessToken, authController.logout);
authRouter.post("/forget", requestValidator(forgetPassSchema), authController.forgetPass);
authRouter.post("/reset", requestValidator(resetPassSchema), authController.resetPass);

export default authRouter;