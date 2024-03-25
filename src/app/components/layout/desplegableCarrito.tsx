import ProductoCarrito from "./productoCarrito";

export default function DesplegableCarrito() {
  return (
    <aside className="w-[448px] right-1 absolute pt-2">
      <div className="bg-fondoSecundario p-5 shadow-lg shadow-fondoSecundario z-50">
        {/* <section className="bg-fondoTerciario flex justify-center h-32 items-center text-4xl">Cesta de productos</section> */}
        <section className="flex flex-col gap-3 border-b border-colorBase pb-2 h-[416px] overflow-y-scroll">
          <ProductoCarrito />
          <ProductoCarrito />
          <ProductoCarrito />
          <ProductoCarrito />
          <ProductoCarrito />
          <ProductoCarrito />
        </section>
        <div className="my-4 text-2xl">Total: XXX€</div>
        <div className="bg-fondoTerciario flex justify-center items-center h-16 text-2xl cursor-pointer hover:bg-colorBase">
          Proceder al pago
        </div>
      </div>
    </aside>
  );
}
