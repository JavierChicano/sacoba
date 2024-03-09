import CardProducto from "./cardNuestrosProductos";

export default function SeccionNuestrosProductos() {
    return(
        <section className="flex flex-col flex-wrap gap-8 mb-20">
            <h1 className="self-center text-5xl">Nuestros productos</h1>
            <div  className="flex flex-wrap mt-48  gap-8 ">
            <CardProducto
            datos={{
                titulo: "Mesas",
                link: "mesas",
                img: "silla.png",
              }}/>
               <CardProducto
            datos={{
                titulo: "Sillas",
                link: "sillas",
                img: "silla.png",
              }}/>
               <CardProducto
            datos={{
                titulo: "Bancos",
                link: "bancos",
                img: "silla.png",
              }}/>
               <CardProducto
            datos={{
                titulo: "A medida",
                link: "crear",
                img: "silla.png",
              }}/>
            </div>
            
        </section>
    )
}