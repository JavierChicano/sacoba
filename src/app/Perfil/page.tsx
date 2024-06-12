import RutaPerfil from "../components/perfil/rutaPerfil";
import SliderPerfil from "../components/perfil/sliderPerfil";
import SliderPerfilMovil from "../components/perfil/sliderPerfilMovil";

export default function Perfil() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl items-center w-full p-6 md:p-0">
        <RutaPerfil />
        <SliderPerfil />
        <SliderPerfilMovil/>
      </div>
    </main>
  );
}
