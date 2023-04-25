import { z } from "zod";
import { cadastreUserSchema } from "../../Schemas/User";

export type ICadastre = z.infer<typeof cadastreUserSchema>;
