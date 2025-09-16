import { z } from "zod";

export const LoginSchema = z.object({
  hahNumber: z.string().min(1, "Nama wajib diisi"),
  password: z.string(),
});

export const RegisterSchema = z
  .object({
    hahNumber: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
  })
