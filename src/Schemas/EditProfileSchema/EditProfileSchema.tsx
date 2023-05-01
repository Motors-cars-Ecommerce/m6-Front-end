import { z } from "zod";

const EditProfileSchema = z.object({
    name: z.string(),
    email: z.string(),
    cpf: z.string(),
    phone: z.string(),
    description: z.string()
});

export default EditProfileSchema;
