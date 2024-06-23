"use client";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { FormLoginValidation } from "../../../../tipos/tiposForm";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";
import { InsertarNuevaPassword } from "./insertarNuevaPassword";
import { setCookie } from "cookies-next";

export default function FormNuevaPassword({
  correoElectronico,
}: {
  correoElectronico: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clientAction = async (formData: FormData) => {
    const newForm = {
      correoElectronico: correoElectronico,
      contraseña: formData.get("contraseña"),
    };

    //Validacion del lado del cliente
    const result = FormLoginValidation.safeParse(newForm);

    if (!result.success) {
      console.log(result.error);
      toast.error(result.error.issues[0].message);
      return;
    }

    //Validacion del lado del servidor
    setLoading(true);
    const response = await InsertarNuevaPassword({
      correoElectronico: result.data.correoElectronico,
      contraseña: result.data.contraseña,
    });

    //Si sale mal
    if (!response.success) {
      //Manejar el error
      setLoading(false);
    } else {
      //Seteamos la cookie con el token que contiene la informacion del usuario
      setCookie("client-Token", response.token);

      //Si se ha insertado correctamente redirige
      redirect("/Perfil/InfoUser");
    }
  };

  return (
    <form className="flex flex-col gap-4 max-w-lg w-full" action={clientAction}>
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
      <Link
        href="/Login"
        className="text-colorBaseSecundario underline font-semibold"
      >
        Volver a iniciar sesión, sin cambiar la contraseña
      </Link>

      {loading ? (
        <Spinner color="warning" />
      ) : (
        <button
          type="submit"
          className="px-3 md:w-2/3 bg-colorBase h-14 self-center text-2xl hover:bg-colorBaseSecundario hover:text-black transition duration-300 ease-in-out"
        >
          Actualizar contraseña
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
