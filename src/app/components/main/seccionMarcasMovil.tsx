"use client";
import Image from "next/image";
import ColorSilestone from "./displayColoresSilestone";
import ColorDekton from "./displayColoresDekton";
const silestone = [
  { grade: "g4", path: "WhiteArabesque.png" },
  { grade: "g5", path: "Calypso.png" },
  { grade: "g5", path: "EtMarfil.png" },
  { grade: "g5", path: "EtMarquina.png" },
  { grade: "g5", path: "EtStatuario.png" },
  { grade: "g5", path: "IconicWhite.png" },
  { grade: "g6", path: "EtCalacattaGold.png" },
  { grade: "g6", path: "EtNoir.png" },
];
const dekton = [
  { path: "Arga.png" },
  { path: "Bergen.png" },
  { path: "Halo.png" },
  { path: "Helena.png" },
  { path: "Khalo.png" },
  { path: "Olimpo.png" },
  { path: "Spectra.png" },
  { path: "Taga.png" },
];
export default function SeccionMarcasMovil() {
  return (
    <section className="flex flex-col w-full text-center gap-y-10 lg:hidden mt-10">
      <section className="border-y-2 border-l-2 border-colorBase p-5 border-color-gradient-right flex flex-col gap-8">
        <Image
          src="/marcas/silestone.png"
          alt="Logo marca silestone"
          width={300}
          height={300}
        />
        <p className="max-w-2xl text-justify">
          Silestone es una superficie de cuarzo de alta calidad, reconocida por
          su excepcional resistencia y durabilidad. Destacando su fácil
          mantenimiento, Silestone es la elección perfecta para nuestras mesas
          más destacadas. Su composición única garantiza una superficie que se
          mantendrá impecable con el paso del tiempo.
        </p>
        <section className="flex flex-wrap gap-x-8 gap-y-2 max-w-2xl justify-center">
          {silestone.map((color, index) => (
            <ColorSilestone
              key={index}
              grado={color.grade}
              color={color.path}
            />
          ))}
        </section>
      </section>
      <section className="col-span-2 border-y-2 border-r-2 border-colorBase p-5 border-color-gradient-left flex flex-col gap-8 ">
        <Image
          className="self-end"
          src="/marcas/dekton.png"
          alt="Logo marca silestone"
          width={300}
          height={300}
        />
        <p className="max-w-2xl self-end text-justify">
          Dekton es una superficie cerámica de última generación, reconocida por
          su extrema resistencia a las manchas y los golpes. Gracias a su
          resistencia a los cambios bruscos de temperatura, Dekton permite su
          uso en exteriores, ofreciendo una solución duradera y versátil para
          una variedad de aplicaciones.
        </p>
        <section className="flex flex-wrap gap-x-8 gap-y-2 max-w-2xl justify-center">
          {dekton.map((color, index) => (
            <ColorDekton key={index} color={color.path} />
          ))}
        </section>
      </section>
      <style jsx>{`
        .border-color-gradient-right {
          border-image: linear-gradient(
              to right,
              var(--colorBase),
              var(--fondo)
            )
            1;
        }
        .border-color-gradient-left {
          border-image: linear-gradient(to left, var(--colorBase), var(--fondo))
            1;
        }
      `}</style>
    </section>
  );
}
