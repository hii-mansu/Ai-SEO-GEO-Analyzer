import User from "../users/user.model.js";
import AppError from "../../shared/errors/appError.js";
import bcrypt from "bcryptjs";
import generate from "../../shared/utils/generateToken.js";

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

        const token = await generate({
            userId: user._id,
            email: user.email
        });

        const userObject = user.toObject();
        delete userObject.password;
        delete userObject.refreshToken;

        return {
            token,
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

        const token = await generate({
            userId: checkUser._id,
            email: checkUser.email
        });

        const userObj = checkUser.toObject();
        delete userObj.password;
        delete userObj.refreshToken;
        return {
            token:token,
            user:userObj,
        };


    }
}

export default new authService();