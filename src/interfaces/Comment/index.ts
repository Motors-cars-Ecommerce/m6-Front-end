import { z } from "zod";
import { updateCommentSchema } from "../../Schemas/CommentsSchema";

export type icommentUpdate = z.infer<typeof updateCommentSchema>;
