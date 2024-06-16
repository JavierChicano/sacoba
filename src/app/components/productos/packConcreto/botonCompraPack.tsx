import { useState } from "react";
import ModalCheckoutEnvio from "../../modalCheckoutEnvio";

export default function BotonCompraPack(pack: any) {
  const [displayModal, setDisplayModal] = useState(false);

  const handleOpenModal = () => {
    setDisplayModal(true);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
  };
  return (
    <div>
      <button onClick={handleOpenModal} className="bg-colorBase p-2 lg:w-32 w-1/2 flex justify-center cursor-pointer">Comprar</button>
      <ModalCheckoutEnvio
        productos={pack}
        displayModal={displayModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
