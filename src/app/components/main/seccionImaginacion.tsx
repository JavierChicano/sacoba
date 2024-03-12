import Image from "next/image";
import BordeCard from "./bordeCard";

export default function SeccionImaginacion() {
  return (
    <section className="flex m-40 gap-8">
      <BordeCard>
        <Image
          className="w-auto h-auto -ml-2"
          src="/prueba4.png"
          alt="Logo de la marca"
          width={256}
          height={256}
        />
      </BordeCard>
      <BordeCard>
      <Image
          className="w-auto h-auto -ml-2"
          src="/prueba4.png"
          alt="Logo de la marca"
          width={256}
          height={256}
        />
        <div className="text-2xl bg-fondoSecundario p-2 self-end mr-4 -mt-10 w-32 flex justify-center">
          Sillas
        </div>
      </BordeCard>
      <BordeCard>
      <Image
          className="w-auto h-auto -ml-2"
          src="/prueba4.png"
          alt="Logo de la marca"
          width={256}
          height={256}
        />
        <div className="text-2xl bg-fondoSecundario p-2 self-end mr-4 -mt-10 w-32 flex justify-center">
          Bancos
        </div>
      </BordeCard>
      <BordeCard>
      <Image
          className="w-auto h-auto -ml-2"
          src="/prueba4.png"
          alt="Logo de la marca"
          width={256}
          height={256}
        />
        <div className="text-2xl bg-fondoSecundario p-2 self-end mr-4 -mt-10 w-32 flex justify-center">
          A medida
        </div>
      </BordeCard>
    </section>
  );
}
