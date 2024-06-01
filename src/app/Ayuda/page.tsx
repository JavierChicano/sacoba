import Desplegable from "../components/Ayuda/desplegable";

export default function Ayuda() {
  return (
    <main className="flex flex-col items-center">
      <section className="max-w-7xl w-full flex flex-col gap-8 text-center">
        <h1 className="text-5xl">¿Tiene las siguientes dudas?</h1>
        <Desplegable
          pregunta="¿Quiere más opciones de personalización?"
          respuesta={respuesta1}
        />
        <Desplegable
          pregunta="¿Prefiere ver las mesas en persona y asesorarse con un profesional?"
          respuesta={respuesta2}
        />
        <Desplegable
          pregunta="¿Cuál es la garantía de los productos y devoluciones?"
          respuesta={respuesta3}
        />
        <Desplegable
          pregunta="Los diferentes tipos de envios"
          respuesta={respuesta4}
        />
        <Desplegable
          pregunta="Explicación del precio en los acabados"
          respuesta={respuesta5}
        />
      </section>
    </main>
  );
}
const respuesta1 = `Consulte el catálogo para verificar disponibilidad y precios. Puesto que en la página, se ha reducido la oferta para simplificar la compra al usuario, y aunque se traten de abarcar todos los aspectos y variantes de personalización, no están cubiertas todas.`;
const respuesta2 = `No hay problema, disponemos de tienda física en la siguiente dirección: Av. de Fuenlabrada, 55, 28970 Humanes de Madrid, Madrid.`;
const respuesta3 = `sdsdd`;
const respuesta4 = `Disponemos de dos opciones, la primera gratuita, recogiendo el pedido físicamente en la tienda y la segunda con un precio de X€, le ofrecemos llevarle el pedido y montarselo en su casa.`;
const respuesta5 = `El precio varía según el material seleccionado. Todos los colores dentro de un mismo material tienen el mismo precio, excepto en el caso de Silestone y Dekton, donde el precio también depende del grupo al que pertenece el material.`;
