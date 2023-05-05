import * as z from "zod";

const setModalPasswordRecoverySchema = z.object({
  email: z.string().email().min(1),
});

export default setModalPasswordRecoverySchema;
