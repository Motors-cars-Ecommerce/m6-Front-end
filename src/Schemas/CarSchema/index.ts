import { z } from "zod";
import { carModelSchema } from "../modelCarSchema/modelCar.schema";
import { imageSchema } from "../imageSchema";
import { commentSchema } from "../CommentsSchema";
import { userSchema } from "../User";

export const carSchema = z.object({
  id: z.string(),
  km: z.number(),
  price: z.number(),
  color: z.string(),
  description: z.string(),
  main_image: z.string(),
  isActive: z.boolean(),
  model_car: carModelSchema,
  images: z.array(imageSchema),
  comments: z.array(commentSchema),
  user: userSchema,
});
