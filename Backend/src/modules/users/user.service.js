class userService{


      async profile(user) {
    const checkUser = await User.findById(user._id);
    if (!checkUser) {
      throw new AppError("Unauthorized.", 401);
    }

    const userObj = checkUser.toObject();
    delete userObj.password;
    delete userObj.refreshToken;
    return {
      user: userObj,
    };
  }


}

export default new userService();