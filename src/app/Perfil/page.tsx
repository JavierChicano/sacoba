import RutaPerfil from "../components/perfil/rutaPerfil";
import SliderPerfil from "../components/perfil/sliderPerfil";

export default function Perfil() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl flex flex-col items-center w-full">
        <RutaPerfil />
        <SliderPerfil />
      </div>
    </main>
  );
}
