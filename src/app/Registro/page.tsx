import IzquierdaLogin from "../components/main/compLoginIzquierda";


export default function Registro() {
  return (
    <main className="grid grid-cols-2 h-screen"
    style={{
        backgroundImage: "url('/fondos/prueba1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <IzquierdaLogin texto="¡Bienvenido a nuestra tienda!"/>
      <section className=""></section>
    </main>
  );
}
