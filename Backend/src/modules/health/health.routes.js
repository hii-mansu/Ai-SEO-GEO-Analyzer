import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "App server is healthy.",
    timeStamp: new Date().toISOString(),
  });
});

export default healthRouter;
