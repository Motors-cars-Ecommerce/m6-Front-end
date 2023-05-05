import * as z from "zod";

const ModalPasswordRecoverySchema = z.object({
  email: z.string().nonempty('O email é obrigatório').email("Formato de e-mail inválido").min(6, "O email precisa de no mínimo 6 caracteres").max(50, "O email pode ter no máximo 50 caracteres")
});

const ResetPasswordPageSchema = z.object({
  password: z.string().nonempty('A senha é obrigatória').min(8, "A senha deve ter no mínimo 8 caracteres"),
  password_confirmation: z.string().nonempty('A senha é obrigatória').min(8, "A senha deve ter no mínimo 8 caracteres")
})
// .superRefine(({ password_confirmation, password }, ctx) => {
//   if (password_confirmation !== password) {
//     ctx.addIssue({
//       code: "custom",
//       message: "The passwords did not match"
//     });
//   }
// });

// .superRefine(({password_confirmation, password}, ctx) => {
//   if(password_confirmation !== password){
//     ctx.addIssue({
//       code: "custom",
//       message: "As senhas não são iguais"
//     })
//   }
// })


export {ModalPasswordRecoverySchema, ResetPasswordPageSchema}