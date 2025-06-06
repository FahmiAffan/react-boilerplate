import { z } from "zod";
import { LoginSchema } from "./AuthSchema";

export type LoginFormData = z.infer<typeof LoginSchema>;
