import { z } from "zod";

export const FormRegistroValidation = z.object({
  nombre: z.string().regex(/^[a-zA-Z]+$/, {
    message: "El nombre solo puede contener letras",
  }),
  apellidos: z.string().regex(/^[a-zA-Z]+$/, {
    message: "Los apellidos solo pueden contener letras",
  }),
  email: z.string().email({
      message: "Email no válido",
    }),
  contraseña: z.string().min(7, {
      message: "La contraseña tiene que tener una longitud mínima de 7 caracteres",
    }),
});
