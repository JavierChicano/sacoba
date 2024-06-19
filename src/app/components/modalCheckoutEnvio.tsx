import { useState } from "react";
import {
  checkoutProductoDomicilio,
  checkoutProductoRecogidaTienda,
} from "../api/mandarCheckouts";
import { IconSquareX } from "@tabler/icons-react";
import { Spinner } from "@nextui-org/react";

export default function ModalCheckoutEnvio({
  productos,
  displayModal,
  onClose,
}: {
  productos: any;
  displayModal: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [loadingTienda, setLoadingTienda] = useState(false);

  const handleLoadingTrue = () => {
    setLoading(true);
  };

  const handleLoadingFalse = () => {
    setLoading(false);
  };
  const handleLoadingTrueTienda = () => {
    setLoadingTienda(true);
  };

  const handleLoadingFalseTienda = () => {
    setLoadingTienda(false);
  };
  
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
        className="flex bg-fondo w-4/5 lg:h-fit lg:w-2/5 p-10 lg:p-16 lg:px-20 flex-col align-middle lg:gap-10 gap-5"
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
          onClick={() => {
            handleLoadingTrueTienda();
            checkoutProductoRecogidaTienda({
              productos,
              onLoad: () => {
                handleLoadingFalseTienda;
              },
            });
          }}
        >
          {loadingTienda ? (
            <aside>
              <h1 className="lg:text-3xl text-xl">Procesando</h1>
              <Spinner color="warning" />
            </aside>
          ) : (
            <>
              <h1 className="lg:text-3xl text-xl">Recogida en tienda</h1>
              <ul className="list-disc pl-4 lg:pl-6 text-xs lg:text-xl ">
                <li>Sin coste adicional</li>
                <li>Obtén tu producto más rápido con esta opción</li>
                <li>Direccion </li>
              </ul>
            </>
          )}
        </aside>
        <aside
          className="w-full lg:w-4/5 border border-colorBaseSecundario self-center p-2 hover:bg-colorBaseSecundario hover:text-textoInvertido cursor-pointer"
          onClick={() => {
            handleLoadingTrue();
            checkoutProductoDomicilio({
              productos,
              onLoad: () => {
                handleLoadingFalse;
              },
            });
          }}
        >
          {loading ? (
            <aside>
              <h1 className="lg:text-3xl text-xl">Procesando</h1>
              <Spinner color="warning" />
            </aside>
          ) : (
            <>
              <h1 className="lg:text-3xl text-xl">A domicilio</h1>
              <ul className="list-disc pl-4 lg:pl-6 text-xs lg:text-xl ">
                <li>Sobreprecio de 30€</li>
                <li>Incluye montaje de la mesa</li>
                <li>Solo disponible para la Comunidad de Madrid</li>
              </ul>
            </>
          )}
        </aside>
      </section>
    </aside>
  );
}
