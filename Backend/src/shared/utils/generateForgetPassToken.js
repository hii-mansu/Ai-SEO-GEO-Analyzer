import jwt from "jsonwebtoken";
import env from "../../config/env.js";

const generateForToken = ({userId}) => {
    return jwt.sign({sub:userId}, env.JWT_FORGET_SECRET, {
        expiresIn:env.JWT_FORGET_EXPIRES_IN
    })
}

export default generateForToken;