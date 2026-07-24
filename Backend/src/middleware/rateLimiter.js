import rateLimit from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import redisClient from "../shared/redis/redisClient.js";

const FIFTEEN_MINUTES = 15 * 60 * 1000;
const THIRTY_MINUTES = 30 * 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;

const createRateLimiter = (windowMs, max, message) => {
  return rateLimit({
    windowMs,
    max,

    standardHeaders: true,
    legacyHeaders: false,

    statusCode: 429,

    message: {
      success: false,
      message,
    },

    store: new RedisStore({
      sendCommand: (...args) => redisClient.sendCommand(args),
    }),
  });
};

const loginKeyGenerator = (req) => {
  return `${req.ip}:${req.body.email?.toLowerCase() || "unknown"}`;
};

export const loginLimiter = createRateLimiter(
  FIFTEEN_MINUTES,
  5,
  "Too many login attempts. Please try again after 15 minutes.",
  loginKeyGenerator
);


export const registerLimiter = createRateLimiter(
  ONE_HOUR,
  5,
  "Too many registration attempts. Please try again later."
);

export const forgotPasswordLimiter = createRateLimiter(
  THIRTY_MINUTES,
  3,
  "Too many password reset requests. Please try again later."
);

export const refreshLimiter = createRateLimiter(
  FIFTEEN_MINUTES,
  30,
  "Too many refresh requests."
);

export const analysisLimiter = createRateLimiter(
  ONE_HOUR,
  20,
  "Too many analysis requests."
);

export const publicLimiter = createRateLimiter(
  FIFTEEN_MINUTES,
  200,
  "Too many requests."
);