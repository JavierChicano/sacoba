import Link from "next/link";

export default function Exitoso() {
  return (
    <main className="flex justify-center w-full h-[50vh]">
        <div className="self-center border border-green-600 bg-green-200/40 p-6 gap-3 flex flex-col">
            <h2 className="font-bold text-2xl">Consulta registrada exitosamente ✅</h2>
            <p>Su solicitud está siendo procesada y nos comprometemos a responderle en el menor tiempo posible</p>
            <Link className="bg-green-800 w-fit self-center p-2 hover:bg-green-600 text-white" href={"/"}>Volver al Inicio</Link>
        </div>
    </main>
  );
}
