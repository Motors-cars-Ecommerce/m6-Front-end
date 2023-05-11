import { z } from "zod";

export const carModelSchema = z.object({
  id: z.string(),
  model: z.string(),
  branded: z.string(),
  year: z.string(),
  fuel: z.string(),
});

export const apiCarModelSchema = z.object({
  id: z.string(),
  model: z.string(),
  branded: z.string(),
  value: z.string(),
  year: z.string(),
  fuel: z.string(),
});
