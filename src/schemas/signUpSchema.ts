import { z } from "zod"

export const usernameValidation = z.string()
    .min(3, "Username must be atleast 3 characters")
    .max(20, "Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can contain only alphabets, numbers and _")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8, "Password must be atleast 8 characters").max(20, "Password must be no more than 20 characters")
})