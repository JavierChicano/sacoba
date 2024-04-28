import { z } from "zod";
const caracteresPermitidos = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/;

export const FormRegistroValidation = z.object({
  nombre: z.string().trim().regex(caracteresPermitidos, {
    message: "El nombre solo puede contener letras",
  }),
  apellidos: z.string().trim().regex(caracteresPermitidos, {
    message: "Los apellidos solo pueden contener letras",
  }),
  email: z.string().email({
      message: "Email no válido",
    }),
  contraseña: z.string().min(7, {
      message: "La contraseña tiene que tener una longitud mínima de 7 caracteres",
    }),
});

export const FormLoginValidation = z.object({
  email: z.string().email({
      message: "Email no válido",
    }),
  contraseña: z.string().min(7, {
      message: "La contraseña tiene que tener una longitud mínima de 7 caracteres",
    }),
});
