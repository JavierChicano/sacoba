import Image from "next/image";

export default function SeccionImaginacion() {
    return(
        <section className="flex m-40">
            <Image
            className="w-auto h-auto"
            src="/prueba4.png"
            alt="Logo de la marca"
            width={256}
            height={256}
            />
        </section>
    )
}