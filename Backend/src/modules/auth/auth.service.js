import User from "../users/user.model.js";
import AppError from "../../shared/errors/appError.js";
import bcrypt from "bcryptjs";
import generate from "../../shared/utils/generateAccessToken.js";
import generateRefToken from "../../shared/utils/generateRefreshToken.js";
import crypto from "crypto";

class authService {
    async register(userData) {
        const { name, email, password } = userData;
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            throw new AppError("User exist", 409)
        };
        const hashPass = await bcrypt.hash(password, 5);
        const user = await User.create({
            name,
            email,
            password:hashPass,
        });

        const refreshToken = generateRefToken({
            userId: user._id,
        });

        const hashRefToken = crypto.createHash("sha256").update(refreshToken).digest("hex");

        user.refreshToken = hashRefToken;
        await user.save();

        const accessToken = await generate({
            userId: user._id,
        });

        const userObject = user.toObject();
        delete userObject.password;
        delete userObject.refreshToken;

        return {
            accessToken,
            refreshToken,
            user:userObject,
        }
    }


    async login(userData){
        const {email, password} = userData;
        const checkUser = await User.findOne({email}).select("+password");
        if(!checkUser){
            throw new AppError("Invalid email or password", 401);
        };

        const comparePassword = await bcrypt.compare(password, checkUser.password);
        if(!comparePassword){
            throw new AppError("Invalid email or password.", 401)
        };

        const refreshToken = generateRefToken({
            userId: checkUser._id,
        });

        const hashRefToken = crypto.createHash("sha256").update(refreshToken).digest("hex");
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
            user:userObj,
        };


    }
}

export default new authService();