import { useState } from "react";
import ModalCheckoutEnvio from "../../modalCheckoutEnvio";

export default function BotonCompraBanco(banco: any) {
  const [displayModal, setDisplayModal] = useState(false);
  const handleOpenModal = () => {
    setDisplayModal(true);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
  };
  //Comvertir el objeto banco, a un objeto universal de "productos"
  const productos = [banco.banco]
  const producto = {productos}

  return (
    <div>
      <button onClick={handleOpenModal} className="bg-colorBase p-2 lg:w-32 w-1/2 flex justify-center cursor-pointer">Comprar</button>
      <ModalCheckoutEnvio
        productos={producto}
        displayModal={displayModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
