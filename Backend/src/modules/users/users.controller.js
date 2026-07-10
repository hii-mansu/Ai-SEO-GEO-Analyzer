import asyncHandler from "../../shared/utils/asyncHandler.js";
import userService from "./user.service.js";

class userController{
    updateProfile = asyncHandler(async(req,res)=>{
        const {user}= await userService.updateProfile(req.user, req.body);

            res.status(200).json({
      success: true,
      message: "Updated successfully",
      user,
    });
    })
}

export default new userController;