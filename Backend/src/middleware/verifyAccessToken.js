import env from "../config/env.js";
import User from "../modules/users/user.model.js";
import AppError from "../shared/errors/appError.js";
import asyncHandler from "../shared/utils/asyncHandler.js";
import jwt from "jsonwebtoken";


const verifyAccessToken = asyncHandler(async(req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new AppError("Unauthorized", 401)
    };
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);
    const user = await User.findById(decoded.sub);
    if(!user){
        throw new AppError("Unauthorized access, user not found.", 401);
    };

    req.user=user;
    next();
});

export default verifyAccessToken