import { z } from "zod";

const cadastreUserSchema = z
  .object({
    name: z.string(),
    email: z.string(),
    cpf: z.string(),
    phone: z.string(),
    birthday: z.string(),
    description: z.string(),
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    typeUser: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data: { password: string; confirmPassword: string; }) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  });

const loginUserSchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().email().nonempty()
})

export { cadastreUserSchema, loginUserSchema };
