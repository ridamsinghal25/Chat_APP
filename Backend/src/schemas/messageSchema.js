import { z } from "zod";

export const messageSchemaValidation = z.object({
  content: z
    .string()
    .min(10, { message: "content must be atleast 10 characters" })
    .max(300, { message: "content cannot be more than 300 characters" }),
  sender: z.string().required("sender Id is required"),
  chat: z.string().required("chat Id is required"),
});
