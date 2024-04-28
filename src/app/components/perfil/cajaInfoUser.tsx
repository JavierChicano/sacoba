import { useSesion } from "../../../../states/states";
import FormPerfil from "./formPerfil";

export default function CajaUserInfo() {
  const { sesionON } = useSesion();

  //Funcion para poner la primera letra en mayuscula
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const usuario = sesionON
    ? JSON.parse(sessionStorage.getItem("usuario") ?? "null")
    : null;
  return (
    <section className="flex flex-col gap-12 px-28">
      {usuario && <aside>
        <h1 className="text-5xl">
          {capitalizeFirstLetter(usuario.nombre) +
            " " +
            capitalizeFirstLetter(usuario.apellidos)}
        </h1>
        <h3>{usuario.correoElectronico}</h3>
        <FormPerfil/>
      </aside>}
    </section>
  );
}
