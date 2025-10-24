import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username should at least contain 2 characters")
  .max(20, "Username should not exceed 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,

  email: z.string().refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: "Invalid email address",
  }),

  password: z.string().min(6, "Password must be at least 6 characters"),
});
