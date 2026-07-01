import z from "zod";

const analysisValidSchema = z.object({
    url: z.string().trim().min(5,"Enter valid url")
})

export default analysisValidSchema