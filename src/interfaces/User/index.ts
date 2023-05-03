import { z } from "zod";
import { cadastreUserBody, cadastreUserSchema, loginUserSchema } from "../../Schemas/User";

export type ICadastre = z.infer<typeof cadastreUserSchema>;
export type ILogin = z.infer<typeof loginUserSchema>;
export type IRegisterBodyNotConfirmPassword = z.infer<typeof cadastreUserBody>;
