import jwt from "jsonwebtoken";
import env from "../../config/env.js";

const generate = ({userId}) => {
    return jwt.sign({sub:userId}, env.JWT_ACCESS_SECRET, {
        expiresIn:env.JWT_ACCESS_EXPIRES_IN
    })
}

export default generate;