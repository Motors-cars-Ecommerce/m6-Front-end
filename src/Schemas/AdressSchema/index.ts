import { z } from "zod";

export const addressSchema = z.object({
  number: z.string(),
  user: z.any(),
  cep: z.string(),
  street: z.string(),
  state: z.string(),
  city: z.string(),
  complement: z.string(),
  id: z.string(),
});
