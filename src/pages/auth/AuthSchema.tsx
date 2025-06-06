import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, "Nama wajib diisi"),
  password: z.string().email("Email tidak valid"),
});

export const RegisterSchema = z
  .object({
    username: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    confirm_password: z
      .string()
      .min(6, "Konfirmasi password minimal 6 karakter"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password dan konfirmasi password harus sama",
  });
