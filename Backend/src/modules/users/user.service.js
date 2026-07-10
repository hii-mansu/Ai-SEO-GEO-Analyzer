import User from "./user.model.js";
import AppError from "../../shared/errors/appError.js";

class userService {


  async updateProfile(user,userData){
    const checkUser = await User.findByIdAndUpdate(user._id,{
      name:userData.name,
    },{new:true, runValidators: true,});
    if(!checkUser){
      throw new AppError("Can't update profile, try after sometime", 401)
    }
    return {
      user:checkUser,
    }
  }


}

export default new userService();
