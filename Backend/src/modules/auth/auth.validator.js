import z from "zod";


export const registerSchema = z.object({
    name: z.string().trim().min(2, "Name must be of two characters").max(15),
    email: z.string().trim().toLowerCase().email("Enter valid email."),
    password: z.string().min(8, "Password must be of 8 characters.").max(15),
});


export const loginSchema = z.object({
    email: z.string().trim().toLowerCase().email("Enter valid email."),
    password: z.string().min(8, "Password must be of 8 characters.").max(15),
});
