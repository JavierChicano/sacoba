"use client";
export default function FormularioContacto() {
  return (
    <section className="bg-fondoSecundario p-12 -mb-12">
      <form className="flex flex-col gap-4 max-w-72">
        <input
          type="text"
          placeholder="Nombre"
          className="border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
        />
        <input
          type="text"
          placeholder="Apellidos"
          className="border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
        />
        <textarea
          placeholder="Consulta"
          className="border-b border-colorBase h-24 bg-fondoTerciario text-xl text-white pl-3 pt-4"
        ></textarea>
        <button
          type="submit"
          className="bg-colorBase h-14 mt-10 -mr-12 w-3/4 self-end text-2xl flex justify-start items-center pl-3 hover:bg-colorBaseSecundario hover:text-black transition duration-300 ease-in-out"
        >
          Enviar
        </button>
      </form>
      <style jsx>{`
        input::placeholder {
          color: #f1be8f;
        }
        textarea::placeholder {
          color: #f1be8f;
          padding-top: -1px;
        }
      `}</style>
    </section>
  );
}
