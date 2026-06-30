import {Router} from "express";
import authController from "./auth.controller.js";
import requestValidator from "../../middleware/validateRequest.js";
import { registerSchema, loginSchema } from "./auth.validator.js";
import verifyRefreshToken from "../../middleware/verifyRefreshToken.js";
import verifyAccessToken from "../../middleware/verifyAccessToken.js";

const authRouter = Router();

authRouter.post("/register", requestValidator(registerSchema), authController.register);
authRouter.post("/login", requestValidator(loginSchema), authController.login);
authRouter.post("/refresh", verifyRefreshToken, authController.accessTokenGen);
authRouter.post("/logout", verifyAccessToken, authController.logout);

export default authRouter;