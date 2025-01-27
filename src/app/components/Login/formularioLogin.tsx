"use client";
import {
  IconEye,
  IconEyeOff,
  IconMail,
  IconUserScan,
} from "@tabler/icons-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { ComprobarUsuario } from "./comprobarUsuario";
import { Toaster, toast } from "sonner";
import { FormLoginValidation } from "../../../../tipos/tiposForm";
import { setCookie } from "cookies-next";
import { InsertarCarritoExistente } from "../Registro/insertarCarritoLocal";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clientAction = async (formData: FormData) => {
    const newForm = {
      correoElectronico: formData.get("correoElectronico"),
      contraseña: formData.get("contraseña"),
    };

    //Validacion del lado del cliente
    const result = FormLoginValidation.safeParse(newForm);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    //Validacion del lado del servidor
    setLoading(true);
    const response = await ComprobarUsuario(result.data);
    if (response?.error) {
      //Manejar el error
      toast.error(response.error);
      setLoading(false);
    } else {
      //Chequeamos si el cliente tiene productos en el carrito
      const carritoString = localStorage.getItem("carrito");
      if (carritoString !== null) {
        const carritoObjeto = JSON.parse(carritoString);
        await InsertarCarritoExistente(
          carritoObjeto,
          result.data.correoElectronico
        );
        localStorage.clear();
      }
      setCookie("client-Token", response.token);
      //Si se ha insertado correctamente redirige al perfil
      redirect("/Perfil/InfoUser");
    }
  };

  return (
    <form className="flex flex-col gap-4 max-w-lg w-full" action={clientAction}>
      <div className="flex relative w-full">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
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
       <Link href="/Login/RecuperarPassword" className="text-colorBaseSecundario underline font-semibold">He olvidado mi contraseña</Link>

      {loading ? (
        <Spinner color="warning" />
      ) : (
        <button
          type="submit"
          className="w-2/3 bg-colorBase h-14 self-center text-2xl hover:bg-colorBaseSecundario hover:text-black transition duration-300 ease-in-out"
        >
          Entrar
        </button>
      )}
      <Toaster position="top-right" richColors />
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
