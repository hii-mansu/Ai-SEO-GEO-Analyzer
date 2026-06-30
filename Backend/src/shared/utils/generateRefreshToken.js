import jwt from "jsonwebtoken";
import env from "../../config/env.js";

const generateRefToken = ({userId}) => {
    return jwt.sign({sub:userId}, env.JWT_REFRESH_SECRET, {
        expiresIn:env.JWT_REFRESH_EXPIRES_IN
    })
}

export default generateRefToken;