import * as z from "zod";

const ModalPasswordRecoverySchema = z.object({
  email: z.string().nonempty('O email é obrigatório').email("Formato de e-mail inválido").max(127, "O email pode ter no máximo 127 caracteres")
});

const ResetPasswordPageSchema = z.object({
  password: z.string()
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos 1 letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos 1 letra minúscula")
    .regex(/(\d)/, "A senha deve conter pelo menos 1 número")
    .regex(/(\W)|_/, "A senha deve conter pelo menos 1 caracter especial")
    .nonempty("Senha é obrigatória"),
    confirmPassword: z.string().nonempty("A confirmação de senha é obrigatória"),
  })
  .refine(
    (data: { password: string; confirmPassword: string }) =>
      data.password === data.confirmPassword,
    {
      message: "As senhas não coincidem",
      path: ["passwordConfirmation"],
    }
  );


export {ModalPasswordRecoverySchema, ResetPasswordPageSchema}