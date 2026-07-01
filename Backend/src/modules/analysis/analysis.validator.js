import z from "zod";

export const analysisValidSchema = z.object({
    url: z.string().trim().min("Enter valid url",5)
})