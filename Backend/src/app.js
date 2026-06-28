import express from "express";
import healthRouter from "./modules/health/health.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", healthRouter);


export default app;