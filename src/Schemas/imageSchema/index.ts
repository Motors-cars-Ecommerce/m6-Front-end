import { z } from "zod";

export const imageSchema = z.object({
  image_url: z.string(),
});
