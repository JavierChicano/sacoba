import { z } from "zod";

export const FormRegistroValidation = z.object({
  nombre: z.string({
    required_error: "El nombre es obligatorio",
    invalid_type_error: "El nombre tiene que ser alfabetico",
  }),
  apellidos: z.string({
    required_error: "El apellido es obligatorio",
    invalid_type_error: "El apellido tiene que ser alfabetico",
  }),
  email: z.string({
    required_error: "El correo es obligatorio",}),
  contraseña: z.string({
    required_error: "La contraseña es obligatoria",}),
});
