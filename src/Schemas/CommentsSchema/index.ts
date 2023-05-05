import { z } from "zod";
import { userSchema } from "../User";
import { carSchema } from "../CarSchema";

export const commentSchema = z.object({
  id: z.string(),
  text: z.string(),
  car: z.any(),
  user: userSchema,
});

export const updateCommentSchema = z.object({
  text: z.string(),
});
