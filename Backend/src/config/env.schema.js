import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["dev", "prod", "test"]),

    PORT: z.coerce.number().default(5000), //coerce converts env string to number,

    MONGO_URI: z.string().min(1),

    JWT_ACCESS_SECRET: z.string().min(10),
    
    JWT_REFRESH_SECRET: z.string().min(10),

    JWT_FORGET_SECRET: z.string().min(10),

    JWT_ACCESS_EXPIRES_IN: z.string(),

    JWT_REFRESH_EXPIRES_IN: z.string(),

    JWT_FORGET_EXPIRES_IN: z.string(),

    CLIENT_URL: z.string().url(),

    REDIS_URL: z.string().optional(),

    CLAUDE_API_KEY: z.string().optional(),

    GEMINI_API_KEY: z.string().optional(),

    RESEND_API_KEY: z.string().optional(),
});

export default envSchema;