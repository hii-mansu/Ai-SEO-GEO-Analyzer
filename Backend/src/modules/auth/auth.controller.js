import { success } from "zod";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import authService from "./auth.service.js";
import env from "../../config/env.js";

class authController{
            register = asyncHandler(async (req, res) => {
        const { token, user } = await authService.register(req.body);

        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: env.NODE_ENV === "prod",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    });

    login = asyncHandler(async (req,res)=>{
        const {token, user} = await authService.login(req.body);
        console.log(token, "Exist");

        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: env.NODE_ENV === "prod",
            sameSite: "lax",
            maxAge: 7*24*60*60*1000,
        });

        res.status(201).json({
            success: true,
            message:"logged in successfully.",
            user,
        })
    });

    logout = asyncHandler(async (req, res) => {

    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: env.NODE_ENV === "prod",
        sameSite: "lax",
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });

});
}

export default new authController();