import { useEffect, useState } from "react";
import { LeerDatosCookie } from "./cookiePerfil";
import FormPerfil from "./formPerfil";
interface Usuario {
  nombre: string;
  apellidos: string;
  correoElectronico: string;
}

export default function CajaUserInfo() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const cookie = await LeerDatosCookie(); 
        if(cookie.status){
          setUsuario(cookie.usuario)
        }else{

        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    obtenerUsuario(); 
  }, []);
console.log(usuario)
  //Funcion para poner la primera letra en mayuscula
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
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
