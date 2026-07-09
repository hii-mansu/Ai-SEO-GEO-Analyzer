import express from "express";
import env from "./config/env.js";
import healthRouter from "./modules/health/health.routes.js";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import authRouter from "./modules/auth/auth.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
import analysisRouter from "./modules/analysis/analysis.routes.js";


const app = express();

app.use(helmet());

app.use(cors({
    origin: 'http://localhost:5173' || "*", //env.clientUrl
    credentials: true,
}));

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use("/", healthRouter);
app.use("/api/v1/auth", authRouter);
//app.use("/api/v1/user", authRouter);
app.use("/api/v1/analysis", analysisRouter);

app.use(errorHandler);


export default app;