import { z } from "zod";

const EditAddressSchema = z.object({
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
});

export default EditAddressSchema;
