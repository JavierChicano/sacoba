import { IconoCopyright } from "../iconos/iconoCopyright";
import DivLogo2 from "../layout/divLogo2";
import TituloFooter from "./tituloFooter";
import Link from "next/link";

export default function ContenidoFooter() {
  return (
    <footer className="w-full border-t-2 border-colorBase py-10">
      <div className="max-w-7xl grid lg:grid-cols-4 grid-cols-2 lg:mx-auto px-10 gap-5">
        <section className="lg:pl-20">
          <TituloFooter titulo="Productos" />
          <ul className="mt-4">
            <li>
              <Link href="/ProductoMesa/">Mesas</Link>
            </li>
            <li>
              <Link href="/ProductoSilla/">Sillas</Link>
            </li>
            <li>
              <Link href="/ProductoBanco/">Bancos</Link>
            </li>
             <li>
              <Link href="/ProductoAMedida/">A medida</Link>
            </li> 
          </ul>
        </section>
        <section className="lg:pl-20">
          <TituloFooter titulo="Contacto" />
          <ul className="mt-4">
            <li><Link href={"/Contacto/"}>Formulario de contacto</Link></li>
            <li>Atención al cliente:</li>
            <p className="text-colorBase cursor-pointer text-sm lg:text-base"><Link href="mailto:atencionCliente@sacoba.es">atencionCliente@sacoba.es</Link></p>

          </ul>
        </section>
        <section className="lg:pl-20">
          <TituloFooter titulo="About" />
          <ul className="mt-4">
            <li><Link href={"/catalogo.pdf"} download={"catalogo.pdf"} >Descargar catálogo</Link></li>
            <li>Quienes somos</li>
          </ul>
        </section>
        <section className="lg:pl-20">
          <TituloFooter titulo="Servicios" />
          <ul className="mt-4">
            <li>Entrega a domicilio</li>
            <li>Recogida en tienda</li>
          </ul>
        </section>
        <section className="lg:mt-10 lg:pl-20">
          <TituloFooter titulo="Legal" />
          <ul className="mt-4">
          <li><Link href={"/AvisoLegal/"}>Aviso legal</Link></li>
            <li>Política de privacidad</li>
            <li>Condiciones de venta</li>
          </ul>
        </section>
        <section className="lg:mt-10 lg:pl-20">
          <TituloFooter titulo="Ayuda" />
          <ul className="mt-4">
            <li><Link href={"/Ayuda/"}>Preguntas frecuentes</Link></li>
          </ul>
        </section>
      </div>
      <aside className="w-full flex flex-col items-center gap-4">
        <DivLogo2 />
        <span className="flex gap-2">
          <p>Muebles Sacoba. Todos los derechos reservados</p>
          <IconoCopyright />
        </span>
      </aside>
    </footer>
  );
}
