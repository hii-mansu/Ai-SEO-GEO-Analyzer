import envSchema from "./env.schema.js";

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error("Invalid env variables");
    console.error(parsedEnv.error.format());
    process.exit(1);
};

const env = parsedEnv.data;
export default env;