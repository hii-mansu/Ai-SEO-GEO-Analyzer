import {createClient} from 'redis';
import env from '../../config/env.js';

const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on("connect", () => {
  console.log("Redis Connected");
});

redisClient.on("error", (err)=>{
    console.log("Redis Error : ", err);
});

await redisClient.connect();

export default redisClient;