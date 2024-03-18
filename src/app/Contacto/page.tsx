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
          <div className="grid grid-cols-2 gap-60 ">
            <FormularioContacto />
            <section className="flex justify-end items-end mb-20">
              <h1 className="text-black text-6xl font-bold">Contáctanos</h1>
            </section>
          </div>
        </div>
      </div>
      <InfoExtra/>
    </main>
  );
}
