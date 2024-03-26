import CardProductoAMedida from "./carNuestrosProductosAMedida";
import CardProducto from "./cardNuestrosProductos";
import CardProductoDerecha from "./cardNuestrosProductosDerecha";

export default function SeccionNuestrosProductos() {
 
    return(
        <section id="productos" className="flex flex-col flex-wrap gap-8 mb-20 max-w-7xl">
            <h1 className="self-center text-5xl">Nuestros productos</h1>
            <div  className="flex flex-wrap  gap-8 justify-center">
            <CardProducto
            datos={{
                titulo: "Mesas",
                link: "mesas",
                img: "mesas/lomma.png",
                descripcion1: "Tapas",
                descripcion2: "Tamaños",
                descripcion3: "Patas",
                descripcion4: "Estructuras",
                descripcion5: "Ir a ver",
              }}/>
               <CardProductoDerecha
            datos={{
                titulo: "Sillas",
                link: "sillas",
                img: "silla.png",
                descripcion1: "Tapas",
                descripcion2: "Tamaños",
                descripcion3: "Patas",
                descripcion4: "Estructuras",
                descripcion5: "Ir a ver",
                
              }}/>
               <CardProducto
            datos={{
                titulo: "Bancos",
                link: "bancos",
                img: "bancos/banco1.png",
                descripcion1: "Tapas",
                descripcion2: "Tamaños",
                descripcion3: "Patas",
                descripcion4: "Estructuras",
                descripcion5: "Ir a ver",
              }}/>
               <CardProductoAMedida
            datos={{
                titulo: "A medida",
                link: "crear",
                img1: "../aMedida.png",
              }}/>
            </div>
            
        </section>
    )
}