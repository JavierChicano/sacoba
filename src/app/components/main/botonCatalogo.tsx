"use client"
export default function BotonCatalogo(){
    return(
        <button
        className="border border-colorBase p-2 w-fit self-center text-xl hover:bg-colorBase transition-all"
        onClick={() => window.open("/catalogo.pdf")}
      >
        Ver catálogo
      </button>
    )
}