import redisClient from "../shared/redis/redisClient.js";



await redisClient.set("name", "Himanshu");

const value = await redisClient.get("name");

console.log(value);