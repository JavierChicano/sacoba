"use client";
import {
  IconEye,
  IconEyeOff,
  IconMail,
  IconUserScan,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { InsertarRegistro } from "./insertarUsuarioRegistro";
import { FormRegistroValidation } from "../../../../tipos/tiposForm";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { setCookie } from "cookies-next";
import { InsertarCarritoExistente } from "./insertarCarritoLocal";
import { Spinner } from "@nextui-org/react";

export default function FormRegistro() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clientAction = async (formData: FormData) => {
    const newForm = {
      correoElectronico: formData.get("correoElectronico"),
      nombre: formData.get("nombre"),
      apellidos: formData.get("apellidos"),
      contraseña: formData.get("contraseña"),
    };

    //Validacion del lado del cliente
    const result = FormRegistroValidation.safeParse(newForm);
    if (!result.success) {
      setIsLoading(false);
      toast.error(result.error.issues[0].message);
      return;
    }

    //Validacion del lado del servidor
    setLoading(true);
    const response = await InsertarRegistro(result.data);
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
      //Seteamos la cookie con el token que contiene la informacion del usuario
      setCookie("client-Token", response.token);

      //Si se ha insertado correctamente redirige al perfil
      router.push("/Perfil");
    }
    setIsLoading(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    const formData = new FormData(event.currentTarget);
    await clientAction(formData);
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-lg mb:max-w-sm"
      onSubmit={handleSubmit}
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

      {loading ? (
        <Spinner color="warning" />
      ) : (
        <button
          type="submit"
          className=" w-2/3 bg-colorBase h-14 self-center text-2xl hover:bg-colorBaseSecundario hover:text-black transition duration-300 ease-in-out"
          disabled={isLoading}
        >
          Crear cuenta
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
