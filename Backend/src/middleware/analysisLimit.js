import jwt from "jsonwebtoken";
import env from "../config/env.js";
import AppError from "../shared/errors/appError.js";

const analysisLimit = (req, res, next) => {
  if (req.user !== null) {
    return next();
  }

  try {
    const token = req.cookies.guest_analysis;

    if (!token) {
      return next();
    }

    const payload = jwt.verify(token, env.JWT_SECRET);

    if (payload.used) {
      return next(
        new AppError(
          "Free analysis limit reached. Please sign in to continue.",
          429
        )
      );
    }

    next();
  } catch (error) {
    next();
  }
};

export default analysisLimit;