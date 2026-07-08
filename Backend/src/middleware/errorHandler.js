const errorHandler = (err, req, res, next) => {
    console.error("========== ERROR ==========");
    console.error("err",err);
    console.error("msg",err.message);
    console.error("Stack", err.stack);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};

export default errorHandler;