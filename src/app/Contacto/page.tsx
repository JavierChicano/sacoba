import FormularioContacto from "../components/contacto/formularioContacto";
import InfoExtra from "../components/contacto/informacionExtra";
import RutaContacto from "../components/contacto/rutaContacto";

export default function Contacto() {
  return (
    <main className="flex flex-col items-center ">
      <div
        className="bg-cover bg-center w-full flex justify-center"
        style={{ backgroundImage: "url('/mapa.png')" }}
      >
        <div className=" max-w-7xl flex flex-col items-center ">
          <RutaContacto />
          <div className="lg:grid lg:grid-cols-2 lg:gap-60 ">
            <h1 className="flex text-black text-5xl font-bold lg:hidden w-full justify-center mb-5">
              Contáctanos
            </h1>
            <FormularioContacto />
            <section className="flex justify-end items-end mb-20">
              <h1 className="text-black text-6xl font-bold lg:block hidden">
                Contáctanos
              </h1>
            </section>
          </div>
        </div>
      </div>
      <InfoExtra />
    </main>
  );
}
