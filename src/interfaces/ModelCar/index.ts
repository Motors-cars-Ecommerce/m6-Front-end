import { z } from "zod";
import {
  apiCarModelSchema,
  carModelSchema,
} from "../../Schemas/modelCarSchema/modelCar.schema";

export type iModelCar = z.infer<typeof carModelSchema>;
export type iApiModelCar = z.infer<typeof apiCarModelSchema>;
