import { any, z } from "zod";
import { addressSchema } from "../AdressSchema";


const cadastreUserSchema = z
  .object({
    name: z.string().nonempty('O nome é obrigatório').max(150, "O nome pode ter no máximo 150 caracteres"),
    email: z.string().nonempty('O email é obrigatório').email("Formato de e-mail inválido").max(127, "O email pode ter no máximo 127 caracteres"),
    cpf: z.string().length(11, 'O CPF deve conter 11 caracteres'),
    phone: z.string().nonempty('O telefone é obrigatório').max(14, "O telefone pode ter no máximo 14 caracteres"),
    birthday: z.string().nonempty('A data é obrigatória'),
    description: z.string(),
    addresses: z.object({
      cep: z.string().nonempty('O CEP é obrigatório').length(8, "O CEP deve ter 8 caracteres"),
      state: z.string().nonempty('O Estado é obrigatório'),
      city: z.string().nonempty('A cidade é obrigatória'),
      street: z.string().nonempty('A Rua é obrigatória'),
      number: z.string().nonempty('O número é obrigatório'),
      complement: z.string(),
    }),
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

const cadastreUserBody = z.object({
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  phone: z.string(),
  birthday: z.string(),
  description: z.string(),
  addresses: z.object({
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
  }),
  seller: z.boolean(),
  password: z.string(),
});

const loginUserSchema = z.object({
  email: z.string().nonempty('O email é obrigatório').email("Formato de e-mail inválido").max(127, "O email pode ter no máximo 127 caracteres"),
  password: z.string()
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos 1 letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos 1 letra minúscula")
    .regex(/(\d)/, "A senha deve conter pelo menos 1 número")
    .regex(/(\W)|_/, "A senha deve conter pelo menos 1 caracter especial")
    .nonempty("Senha é obrigatória"),
});

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  phone: z.string(),
  birthday: z.date(),
  seller: z.boolean(),
  isActive: z.boolean(),
  description: z.string(),
  address: z.array(addressSchema),
  cars: z.array(any()),
});

export { cadastreUserSchema, loginUserSchema, cadastreUserBody, userSchema };
