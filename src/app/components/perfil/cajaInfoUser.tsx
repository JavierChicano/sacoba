import FormPerfil from "./formPerfil";
interface Usuario {
  nombre: string;
  apellidos: string;
  correoElectronico: string;
}

export default function CajaUserInfo({usuario}:{usuario: Usuario | undefined}) {
  
  //Funcion para poner la primera letra en mayuscula
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <section className="flex flex-col gap-12 md:px-28">
      {usuario && <aside>
         <h1 className="md:text-5xl text-3xl">
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
