"use client";
import {
  IconEye,
  IconEyeOff,
  IconMail,
  IconUserScan,
} from "@tabler/icons-react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { InsertarRegistro } from "./insertarUsuarioRegistro";
import { FormRegistroValidation } from "../../../../tipos/tiposForm";
import { redirect } from "next/navigation";

export default function FormRegistro() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clientAction = async (formData: FormData) => {
    const newForm = {
      nombre: formData.get("nombre"),
      apellidos: formData.get("apellidos"),
      email: formData.get("correoElectronico"),
      contraseña: formData.get("contraseña"),
    };
    const result = FormRegistroValidation.safeParse(newForm);
    if (!result.success) {
      console.log(result.error.issues);
      return;
    }
    const response = await InsertarRegistro(result.data);
    if (response?.error) {
      //Manejar el error
      console.log(response.error);
    } else {
      //Si se ha insertado correctamente redirige al main
      redirect("/");
    }
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-lg mb:max-w-sm"
      action={clientAction}
    >
      <div className="flex gap-4 w-full relative">
        <div className="flex w-1/2 relative">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
            required
            name="nombre"
          />
          <IconUserScan
            className="absolute right-5 self-center w-8"
            height={30}
          />
        </div>

        <input
          type="text"
          placeholder="Apellidos"
          className="w-1/2 border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          required
          name="apellidos"
        />
        <IconUserScan
          className="absolute right-5 self-center w-8"
          height={30}
        />
      </div>
      <div className="flex relative">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          required
          name="correoElectronico"
        />
        <IconMail
          className="absolute right-5 self-center w-8 z-15"
          height={30}
        />
      </div>

      <div className="flex relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          required
          name="contraseña"
        />

        {showPassword ? (
          <IconEyeOff
            className="absolute right-5 self-center w-8 z-15 cursor-pointer"
            height={30}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <IconEye
            className="absolute right-5 self-center w-8 z-15 cursor-pointer"
            height={30}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>

      <button
        type="submit"
        className=" w-2/3 bg-colorBase h-14 self-center text-2xl hover:bg-colorBaseSecundario hover:text-black transition duration-300 ease-in-out"
      >
        Crear cuenta
      </button>
      <style jsx>{`
        input::placeholder {
          color: #f1be8f;
        }
        textarea::placeholder {
          color: #f1be8f;
          padding-top: -1px;
        }
      `}</style>
    </form>
  );
}