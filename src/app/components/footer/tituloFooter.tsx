
import HoverBoton from "../layout/hoverBotones";

export default function TituloFooter({ titulo }: { titulo: string }) {
  return (
    <HoverBoton>
      <h1 className="text-4xl">{ titulo }</h1>
    </HoverBoton>
  );
}
