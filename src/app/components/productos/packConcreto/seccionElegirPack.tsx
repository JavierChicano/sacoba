import Image from "next/image";

export default function ElegirPack({
  mesa,
  precioMesa,
  silla,
}: {
  mesa: string;
  precioMesa: number;
  silla: string;
}) {
  return (
    <section className="grid grid-cols-2 w-full">
      <div className="flex justify-end relative">
        <Image
          src={`/productos/packs/${mesa}.png`}
          width={400}
          height={400}
          alt="foto mesa"
          className="h-full"
        />
        <div className="absolute h-48 w-48 bottom-0 right-0 bg-black/40 p-4">
          <Image
            src={`/productos/packs/${silla}.png`}
            width={300}
            height={300}
            alt="foto silla"
            className="h-full"
          />
        </div>
      </div>
      <div className="bg-fondoSecundario p-8 flex flex-col gap-4">ddddddddd</div>
    </section>
  );
}
