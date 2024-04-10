import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, { message: "Username must be atleast 4 characters" })
  .max(20, "Username must not be more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, {
    message: "Username must not contain special characters",
  });

export const avatarValidation = z.object({
  public_id: z.string(),
  url: z.string(),
  localPath: z.string(),
});

export const signUpSchemaValidation = z.object({
  usernane: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be atleast 8 characters"),
  avatar: avatarValidation,
});
