import { useState } from "react";
import ModalCheckoutEnvio from "../modalCheckoutEnvio";

export default function BotonCompraCarrito(productos: any) {
  const [displayModal, setDisplayModal] = useState(false);
  console.log(productos);
  const handleOpenModal = () => {
    setDisplayModal(true);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
  };
  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="p-2 bg-fondoSecundario border flex justify-center border-colorBase hover:bg-colorBase cursor-pointer h-full items-center"
      >
        Proceder al pago
      </button>
      <ModalCheckoutEnvio
        productos={productos}
        displayModal={displayModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
