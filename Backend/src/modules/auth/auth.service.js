import User from "../users/user.model.js";
import AppError from "../../shared/errors/appError.js";
import bcrypt from "bcryptjs";
import generate from "../../shared/utils/generateAccessToken.js";
import generateRefToken from "../../shared/utils/generateRefreshToken.js";
import generateForToken from "../../shared/utils/generateForgetPassToken.js";
import crypto from "crypto";
import { sendEmail } from "../../shared/email/email.service.js";
import resetPasswordTemplate from "../../shared/email/templates/resetPasswordTemplate.js";
import signupTemplate from "../../shared/email/templates/signupTemplate.js";

class authService {
  async register(userData) {
    const { name, email, password } = userData;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      throw new AppError("User exist", 409);
    }
    const hashPass = await bcrypt.hash(password, 5);
    const user = await User.create({
      name,
      email,
      password: hashPass,
    });

    const refreshToken = generateRefToken({
      userId: user._id,
    });

    const hashRefToken = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    user.refreshToken = hashRefToken;
    await user.save();

    const accessToken = await generate({
      userId: user._id,
    });

    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.refreshToken;

    // await sendEmail({
    //   to: user.email,
    //   subject: "Welcome to AI SEO GEO Analyzer",
    //   html: signupTemplate(user.name),
    // });

    return {
      accessToken,
      refreshToken,
      user: userObject,
    };
  }

  async login(userData) {
    const { email, password } = userData;
    const checkUser = await User.findOne({ email }).select("+password");
    if (!checkUser) {
      throw new AppError("Invalid email or password", 401);
    }

    const comparePassword = await bcrypt.compare(password, checkUser.password);
    if (!comparePassword) {
      throw new AppError("Invalid email or password.", 401);
    }

    const refreshToken = generateRefToken({
      userId: checkUser._id,
    });

    const hashRefToken = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");
    checkUser.refreshToken = hashRefToken;
    await checkUser.save();

    const accessToken = generate({
      userId: checkUser._id,
    });

    const userObj = checkUser.toObject();
    delete userObj.password;
    delete userObj.refreshToken;
    return {
      accessToken,
      refreshToken,
      user: userObj,
    };
  }

  async forget(userData) {
    const { email } = userData;
    const user = await User.findOne({ email: email });
    if (!user) {
      return;
    }

    const token = generateForToken({ userId: user._id });
    await user.updateOne({
      resetToken: token,
      passwordResetExpires: Date.now() + 5 * 60 * 1000,
    });
    const resetLink = `http://localhost:5173/reset-password?token=${token}`;

    await sendEmail({
      to: user.email,
      subject: "Reset Your Password",
      html: resetPasswordTemplate(resetLink),
    });
    return;
  }

  async reset(userData) {
    const { password, resetToken } = userData;
    const user = await User.findOne({ resetToken: resetToken });
    if (!user) {
      throw new AppError("");
    }
    const hashPass = await bcrypt.hash(password, 5);
    await user.updateOne({
      password: hashPass,
      refreshToken: null,
      passwordResetExpires: null,
      refreshToken: null,
    });
    return {
      message: "Changed successfully.",
    };
  }

  async me(userData) {
    const checkUser = userData; //await User.findById(userData._id);
    if (!checkUser) {
      throw new AppError("Unauthenticated", 401);
    }

    const userObj = checkUser.toObject();
    delete userObj.password;
    delete userObj.refreshToken;
    return {
      user: userObj,
    };
  }
}

export default new authService();
