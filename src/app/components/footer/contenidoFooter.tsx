import { IconoCopyright } from "../iconos/iconoCopyright";
import DivLogo from "../layout/divLogo";
import TituloFooter from "./tituloFooter";
import Image from "next/image";

export default function ContenidoFooter() {
  return (
    <footer className="w-full border-t-2 border-colorBase py-10">
      <div className="max-w-7xl grid grid-cols-4 mx-auto">
        <section className="pl-20">
          <TituloFooter titulo="Productos" />
          <ul className="mt-4">
            <li>Mesas</li>
            <li>Sillas</li>
            <li>Bancos</li>
            <li>A medida</li>
          </ul>
        </section>
        <section className="pl-20">
          <TituloFooter titulo="Contacto" />
          <ul className="mt-4">
            <li>Formulario de contacto</li>
            <li>Atencion al cliente:</li>
            <li className="text-colorBase">atencionCliente@gmail.com</li>
          </ul>
        </section>
        <section className="pl-20">
          <TituloFooter titulo="About" />
          <ul className="mt-4">
            <li>Descargar catálogo</li>
            <li>Quienes somos</li>
          </ul>
        </section>
        <section className="pl-20">
          <TituloFooter titulo="Servicios" />
          <ul className="mt-4">
            <li>Entrega a domicilio</li>
            <li>Recogida en tienda</li>
          </ul>
        </section>
        <section className="mt-10 pl-20">
          <TituloFooter titulo="Legal" />
          <ul className="mt-4">
            <li>Aviso legal</li>
            <li>Política de privacidad</li>
            <li>Condiciones de venta</li>
          </ul>
        </section>
        <section className="mt-10 pl-20">
          <TituloFooter titulo="Redes" />
          <div></div>
        </section>
      </div>
      <aside className="w-full flex flex-col items-center gap-4">
        <DivLogo />
        <span className="flex gap-2">
          <p>Muebles Sacoba. Todos los derechos reservados</p>
          <IconoCopyright />
        </span>
      </aside>
    </footer>
  );
}
