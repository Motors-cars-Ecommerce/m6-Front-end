import { z } from "zod";
import { carSchema } from "../../Schemas/CarSchema";

export type icar = z.infer<typeof carSchema>;
