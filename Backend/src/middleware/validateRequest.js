
const requestValidator=(schema)=>{
    return (req, res, next)=>{
        console.log("Body", req.body);
        const result = schema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
                success: false,
                error: result.error.flatten(),
            })
        }
        req.body= result.data;
        next();
    }
}

export default requestValidator;