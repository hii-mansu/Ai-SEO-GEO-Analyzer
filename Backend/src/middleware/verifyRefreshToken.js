import env from "../config/env.js";
import User from "../modules/users/user.model.js";
import AppError from "../shared/errors/appError.js";
import asyncHandler from "../shared/utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const verifyRefreshToken = asyncHandler(async(req, res, next)=>{
    const refreshToken = req.cookies.refreshToken
    const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.sub);
    if(!user){
        throw new AppError("Ref - Unauthorized access, user not found.", 401);
    };

    const hashRefToken = crypto.createHash("sha256").update(refreshToken).digest("hex");
    if(hashRefToken !== user.refreshToken){
        throw new AppError("Ref - Unauthorized", 401);
    }

    req.user=user;
    next();
})

export default verifyRefreshToken