import env from "../config/env.js";
import User from "../modules/users/user.model.js";
import AppError from "../shared/errors/appError.js";
import asyncHandler from "../shared/utils/asyncHandler.js";
import jwt from "jsonwebtoken";


const verifyForgetToken = asyncHandler(async(req, res, next)=>{
    const token = req.body.resetToken;
    if(!token){
        throw new AppError("Unauthorized", 401)
    };
    const decoded = jwt.verify(token, env.JWT_FORGET_SECRET);
    const user = await User.findById(decoded.sub).select("+resetToken");
    if(!user){
        throw new AppError("1Unauthorized access, user not found.", 401);
    };

    if(user.resetToken !== req.body.resetToken){
        throw new AppError("2Unauthorized access, user not found.", 401);
    };
    //req.body.resetToken=user._id;
    next();
});

export default verifyAccessToken