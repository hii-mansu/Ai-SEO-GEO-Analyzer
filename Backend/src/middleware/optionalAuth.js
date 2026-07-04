import jwt from 'jsonwebtoken'
import env from '../config/env.js';
import User from '../modules/users/user.model.js';

const optionalAuth = async(req, res, next)=>{
    try {
        const authHEader = req.headers.authorization;
        if(!authHEader || !authHEader.startsWith("Bearer ")){
            req.user = null;
            return next();
        };

        const token = authHEader.split(" ")[1];

        const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);

        if(decoded.sub){
            const user = await User.findById(decoded.sub);
        req.user = user || null;
        }else{
            req.user = null;
        }
        next();
    } catch (error) {
        req.user = null;
        next();
    }
}

export default optionalAuth;