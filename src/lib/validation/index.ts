import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Provide a valid name"}).max(60 , {message: "Too Long"}),
    username: z.string().min(2, {message: "Too Short"}).max(60 , {message: "Too Long"}),
    email: z.string().email({message: "Invalid Email"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters long."}),
  })