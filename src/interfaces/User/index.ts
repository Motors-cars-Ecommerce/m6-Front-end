import { z } from "zod";
import { cadastreUserSchema, loginUserSchema } from "../../Schemas/User";

export type ICadastre = z.infer<typeof cadastreUserSchema>;
export type ILogin = z.infer<typeof loginUserSchema>;
