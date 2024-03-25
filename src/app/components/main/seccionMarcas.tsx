import DivMarca from "./divMarca";

export default function SeccionMarcas() {
  return (
    <section className="flex w-3/4 align-middle h-96">
      <aside className="flex flex-col text-5xl gap-8 justify-center w-2/3 pl-20">
        <h1>Nuestras</h1>
        <h1>marcas premiun</h1>
      </aside>
      <aside className="w-1/3 flex flex-col justify-center gap-16">
        <DivMarca
          datos={{
            img: "silestone.png",
            marca: "Silestone",
          }}
        />
        
        <DivMarca
          datos={{
            img: "dekton.png",
            marca: "Dekton",
          }}
        />
      </aside>
    </section>
  );
}
