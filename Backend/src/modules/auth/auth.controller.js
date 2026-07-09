import asyncHandler from "../../shared/utils/asyncHandler.js";
import authService from "./auth.service.js";
import env from "../../config/env.js";
import generate from "../../shared/utils/generateAccessToken.js";
import User from "../users/user.model.js";

class authController {
  register = asyncHandler(async (req, res) => {
    const { accessToken, refreshToken, user } = await authService.register(req.body);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === "prod",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
      accessToken,
    });
  });

  login = asyncHandler(async (req, res) => {
    const { accessToken, refreshToken, user } = await authService.login(req.body);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === "prod",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "logged in successfully.",
      user,
      accessToken,
    });
  });

  logout = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(req.user._id, {
      refreshToken:null
    })

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: env.NODE_ENV === "prod",
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  });

  accessTokenGen = asyncHandler(async(req,res)=>{
    const accessToken = generate({userId:req.user._id});

    res.status(200).json({
      success: true,
      message: "Access token refreshed.",
      user:req.user,
      accessToken
    });

  })

  forgetPass = asyncHandler(async(req, res)=>{
    await authService.forget(req.body);
    res.status(200).json({
      success: true,
      message: "Reset link has been sent to registered email.",
    });
  })

  resetPass = asyncHandler(async(req,res)=>{
    const {message} = await authService.reset(req.body);
    res.status(200).json({
      success: true,
      message: message,
    });
  })

    me = asyncHandler(async (req, res) => {
    const { user } = await authService.me(req.user);


    res.status(200).json({
      success: true,
      message: "Details fetched successfully.",
      user,
    });
  });

}

export default new authController();
