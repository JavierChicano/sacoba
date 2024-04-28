import { IconBuildingSkyscraper, IconHomeEdit, IconPhone, IconScan, IconUserScan } from "@tabler/icons-react";
import { useSesion } from "../../../../states/states";
import { FormCuentaValidation } from "../../../../tipos/tiposForm";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { TipoUsuario } from "../../../../tipos/tipos";
import { InsertarUserData } from "./InsertarFormUser";

export default function FormPerfil() {
  const { sesionON } = useSesion();
  const usuario = sesionON
    ? JSON.parse(sessionStorage.getItem("usuario") ?? "null")
    : null;

  const clientAction = async (formData: FormData) => {
    const newForm = {
      correoElectronico: usuario.correoElectronico,
      nombre: formData.get("nombre"),
      apellidos: formData.get("apellidos"),
      telefono: formData.get("telefono"),
      domicilio: formData.get("domicilio"),
      cp: formData.get("cp"),
      provincia: formData.get("provincia"),
    };
    //Validacion del lado del cliente
    const result = FormCuentaValidation.safeParse(newForm);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    //Validacion del lado del servidor
    const response = await InsertarUserData(result.data);
    if (response?.error) {
      //Manejar el error
      toast.error(response.error);
    } else {
      //Si se ejecuta correctamente
      sessionStorage.setItem("usuario", JSON.stringify(newForm))
    }
  };
  return (
    <form className="grid grid-cols-2 w-full gap-4 mt-10" action={clientAction}>
      {/* Nombre */}
      <div className="flex relative">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          required
          name="nombre"
          defaultValue={usuario.nombre}
        />
        <IconUserScan
          className="absolute right-5 self-center w-8"
          height={30}
        />
      </div>
      {/* Apellidos */}
      <div className="flex relative">
        <input
          type="text"
          placeholder="Apellidos"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          required
          name="apellidos"
          defaultValue={usuario.apellidos}
        />
        <IconUserScan
          className="absolute right-5 self-center w-8"
          height={30}
        />
      </div>

      {/* INFORMACION EXTRA */}
      <div className="w-full border-b border-colorBase mt-5 col-span-2">
        <h3>Información extra</h3>
      </div>
      <div className="flex relative">
        <input
          type="text"
          placeholder="Nº Telefono"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          name="telefono"
          defaultValue={usuario.telefono || null}
        />
        <IconPhone
          className="absolute right-5 self-center w-8"
          height={30}
        />
      </div>
      <div className="flex relative">
        <input
          type="text"
          placeholder="Domicilio"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          name="domicilio"
          defaultValue={usuario.domicilio || null}
        />
        <IconHomeEdit
          className="absolute right-5 self-center w-8"
          height={30}
        />
      </div>
      <div className="flex relative">
        <input
          type="text"
          placeholder="Cod Postal"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          name="cp"
          defaultValue={usuario.cp || null}
        />
        <IconScan
          className="absolute right-5 self-center w-8"
          height={30}
        />
      </div>
      <div className="flex relative">
        <input
          type="text"
          placeholder="Provincia"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          name="provincia"
          defaultValue={usuario.provincia || null}
        />
        <IconBuildingSkyscraper
          className="absolute right-5 self-center w-8"
          height={30}
        />
      </div>
      <div className="col-span-2 flex justify-center mt-10">
        <button
          type="submit"
          className=" w-1/3 bg-colorBase h-14 self-center text-2xl hover:bg-colorBaseSecundario hover:text-black transition duration-300 ease-in-out"
        >
          Guardar cambios
        </button>
      </div>
      <Toaster position="top-right" richColors />
    </form>
  );
}
