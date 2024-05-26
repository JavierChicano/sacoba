
import HoverBoton from "../layout/hoverBotones";

export default function TituloFooter({ titulo }: { titulo: string }) {
  return (
    <HoverBoton>
      <h1 className="lg:text-4xl text-3xl">{ titulo }</h1>
    </HoverBoton>
  );
}
