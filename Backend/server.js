import "dotenv/config";
import app from  "./src/app.js";
import env from "./src/config/env.js";
import connectDB from "./src/database/connection.js";


const PORT = env.port || 5000;

const startServer = async()=>{
    await connectDB();

    app.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`);
});
};

startServer();