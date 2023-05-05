import * as z from "zod";

const ModalPasswordRecoverySchema = z.object({
  email: z.string().email().min(1),
});

const ResetPasswordPageSchema = z.object({
  password: z.string().min(1),
  password_confirmation: z.string().min(1),
});


export {ModalPasswordRecoverySchema, ResetPasswordPageSchema}