import { z } from "zod";
const caracteresPermitidos = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/;
const soloNumeros = /^[0-9]+$/;

export const FormRegistroValidation = z.object({
  correoElectronico: z.string().email({
    message: "Email no válido",
  }),
  nombre: z.string().trim().regex(caracteresPermitidos, {
    message: "El nombre solo puede contener letras",
  }),
  apellidos: z.string().trim().regex(caracteresPermitidos, {
    message: "Los apellidos solo pueden contener letras",
  }),
  contraseña: z.string().min(7, {
    message:
      "La contraseña tiene que tener una longitud mínima de 7 caracteres",
  }),
});

export const FormLoginValidation = z.object({
  correoElectronico: z.string().email({
    message: "Email no válido",
  }),
  contraseña: z.string().min(7, {
    message:
      "La contraseña tiene que tener una longitud mínima de 7 caracteres",
  }),
});

export const FormRecuperarValidation = z.object({
  correoElectronico: z.string().email({
    message: "Email no válido",
  })
});

export const FormCuentaValidation = z.object({
  correoElectronico: z.string().email({
    message: "Email no válido",
  }),
  nombre: z.string().trim().regex(caracteresPermitidos, {
    message: "El nombre solo puede contener letras",
  }),
  apellidos: z.string().trim().regex(caracteresPermitidos, {
    message: "Los apellidos solo pueden contener letras",
  }),
  telefono: z.string().nullable().refine(value => value === null || value.trim() === "" || (soloNumeros.test(value.trim()) && value.trim().length === 9), {
    message: "El teléfono debe contener 9 dígitos numéricos",
  }),
  domicilio: z.string().nullable().refine(value => value === null || value.trim() === "" || value.trim().length > 0, {
    message: "El domicilio no puede estar vacío",
  }),
  cp: z.string().nullable().refine(value => value === null || value.trim() === "" || (soloNumeros.test(value.trim()) && value.trim().length === 5), {
    message: "El código postal solo puede contener números y debe tener 5 dígitos",
  }),
  provincia: z.string().nullable().refine(value => value === null || value.trim() === "" || caracteresPermitidos.test(value.trim()), {
    message: "La provincia solo puede contener letras",
  }),
});

export const FormConsultaValidation = z.object({
  correoElectronico: z.string().email({
    message: "Email no válido",
  }),
  nombre: z.string().trim().regex(caracteresPermitidos, {
    message: "El nombre solo puede contener letras",
  }),
  motivo: z.string({
    message:"Especifica un motivo"
  }),
  consulta: z.string().min(5, {
    message: "Especifica la consulta"
  }),
});
