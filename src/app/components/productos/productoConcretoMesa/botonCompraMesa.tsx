import { useState } from "react";
import ModalCheckoutEnvio from "../../modalCheckoutEnvio";

export default function BotonCompraMesa(mesa: any) {
  const [displayModal, setDisplayModal] = useState(false);

  const handleOpenModal = () => {
    setDisplayModal(true);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
  };
  //Comvertir el objeto mesa, a un objeto universal de "productos"
  const productos = [mesa.mesa]
  const producto = {productos}

  return (
    <div className="w-1/2 border border-colorBase md:w-auto">
      <button onClick={handleOpenModal} className="bg-colorBase p-2 lg:w-32 w-full flex justify-center cursor-pointer">Comprar</button>
      <ModalCheckoutEnvio
        productos={producto}
        displayModal={displayModal}
        onClose={handleCloseModal}
        procedencia="producto"
      />
    </div>
  );
}
