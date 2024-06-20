export default function VerEscala({ imagen }: { imagen: string }) {
  return (
    <button
      className="text-xl cursor-pointer"
      onClick={() => window.open(`/${imagen}.png`)}
    >
      <span className="hidden md:block">Ver escala de medidas</span>
      <span className="block md:hidden">Medidas</span>{" "}
    </button>
  );
}
