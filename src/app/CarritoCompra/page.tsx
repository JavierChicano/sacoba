import CompClienteCarrito from "../components/CarritoCompra/seccionClienteCarrito";

export default function CarritoCompra() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl flex flex-col items-center w-full">
        <section className="bg-fondoSecundario w-full text-6xl flex justify-center items-center h-64 mb-10 bg-cover" style={{ backgroundImage: `url('/fondos/cestaProductos.jpg')` }}>
         <span className="font-semibold text-white bg-[#17181d41]">Cesta de productos</span>
        </section>
        <CompClienteCarrito/>
      </div>
    </main>
  );
}
