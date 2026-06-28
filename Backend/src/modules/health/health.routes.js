import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/health", (req,res)=>{
    res.json({
        success: true,
        message: "App server is healthy."
    })
});

export default healthRouter;