import {Router} from "express";
import userController from "./users.controller.js"
import requestValidator from "../../middleware/validateRequest.js";
import verifyAccessToken from "../../middleware/verifyAccessToken.js";
import { updateProfileSchema } from "./user.validator.js";

const userRouter = Router();

userRouter.patch("/update", verifyAccessToken, requestValidator(updateProfileSchema), userController.updateProfile);

export default userRouter;