import { checkoutProductoDomicilio, checkoutProductoRecogidaTienda } from "../api/mandarCheckouts";
import { IconSquareX } from "@tabler/icons-react";

export default function ModalCheckoutEnvio({
  productos,
  displayModal,
  onClose,
}: {
  productos: any;
  displayModal: boolean;
  onClose: () => void;
}) {
  console.log(productos)

  return (
    <aside
      className={
        displayModal
          ? "fixed h-full w-full bg-black/60 z-50 flex top-0 left-0 items-center justify-center "
          : "hidden"
      }
      onClick={onClose}
    >
      <section
        className="flex bg-fondo w-4/5 lg:h-3/5 lg:w-2/5 p-10 lg:p-16 lg:px-20 flex-col align-middle lg:gap-10 gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl lg:text-5xl border-b border-colorBase flex justify-between items-end">
          Recogida
          <IconSquareX
            stroke={2}
            size={38}
            className="self-end cursor-pointer"
            onClick={onClose}
          />
        </h1>
        <aside
          className="w-full lg:w-4/5 border border-colorBaseSecundario self-center p-2 hover:bg-colorBaseSecundario hover:text-textoInvertido cursor-pointer"
          onClick={() => checkoutProductoRecogidaTienda(productos)}
        >
          <h1 className="lg:text-3xl text-xl">Recogida en tienda</h1>
          <ul className="list-disc pl-4 lg:pl-6 text-xs lg:text-xl ">
            <li>Sin coste adicional</li>
            <li>Obtén tu producto más rápido con esta opción</li>
            <li>Direccion </li>
          </ul>
        </aside>
        <aside
          className="w-full lg:w-4/5 border border-colorBaseSecundario self-center p-2 hover:bg-colorBaseSecundario hover:text-textoInvertido cursor-pointer"
          onClick={() => checkoutProductoDomicilio(productos)}
        >
          <h1 className="lg:text-3xl text-xl">A domicilio</h1>
          <ul className="list-disc pl-4 lg:pl-6 text-xs lg:text-xl ">
            <li>+30€ extra</li>
            <li>Incluye montaje de la mesa</li>
          </ul>
        </aside>
      </section>
    </aside>
  );
}
