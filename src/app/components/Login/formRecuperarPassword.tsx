"use client";
import { IconMail } from "@tabler/icons-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { FormRecuperarValidation } from "../../../../tipos/tiposForm";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";
import { ComprobarUserExist } from "./comprobarUserExist";
import { sendEmail } from "@/app/api/mandarEmails";

export default function FormRecuperarContraseña() {
  const [loading, setLoading] = useState(false);

  const clientAction = async (formData: FormData) => {
    const newForm = {
      correoElectronico: formData.get("correoElectronico"),
    };

    //Validacion del lado del cliente
    const result = FormRecuperarValidation.safeParse(newForm);

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    //Validacion del lado del servidor
    setLoading(true);
    const response = await ComprobarUserExist(result.data.correoElectronico);
    if (response?.error) {
      //Manejar el error
      toast.error(response.error);
      setLoading(false);
    } else {
        sendEmail(response.emailData)
      //Si se ha insertado correctamente redirige
      redirect("/Login/RecuperarPassword/PasswordEnviada");
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
      <Link
        href="/Login"
        className="text-colorBaseSecundario underline font-semibold"
      >
        Volver a iniciar sesión
      </Link>

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
