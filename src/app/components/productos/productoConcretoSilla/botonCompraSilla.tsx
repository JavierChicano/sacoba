import { useState } from "react";
import ModalCheckoutEnvio from "../../modalCheckoutEnvio";

export default function BotonCompraSilla(silla: any) {
  const [displayModal, setDisplayModal] = useState(false);

  const handleOpenModal = () => {
    setDisplayModal(true);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
  };
  //Comvertir el objeto silla, a un objeto universal de "productos"
  const productos = [silla.silla]
  const producto = {productos}

  return (
    <div className="w-1/2 border border-colorBase">
      <button onClick={handleOpenModal} className="bg-colorBase p-2 lg:w-32 w-full flex justify-center cursor-pointer">Comprar</button>
      <ModalCheckoutEnvio
        productos={producto}
        displayModal={displayModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}