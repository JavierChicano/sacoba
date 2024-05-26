import CompClienteCarritoMovil from "../components/CarritoCompraMovil/seccionClienteCarroMovil";

export default function CarritoCompraMovil() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <section className="bg-fondoSecundario w-full text-4xl flex justify-center items-center h-32 my-5 bg-cover" style={{ backgroundImage: `url('/fondos/cestaProductos.jpg')` }}>
         <span className="font-semibold text-white bg-[#17181d41]">Cesta</span>
        </section>
        <CompClienteCarritoMovil/>
      </div>
    </main>
  );
}
