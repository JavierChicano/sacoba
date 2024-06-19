"use client";
import { Toaster, toast } from "sonner";
import { FormConsultaValidation } from "../../../../tipos/tiposForm";
import { InsertarConsulta } from "./insertarConsulta";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function FormularioContacto() {
  const clientAction = async (formData: FormData) => {
    const newForm = {
      correoElectronico: formData.get("correoElectronico"),
      nombre: formData.get("nombre"),
      motivo: formData.get("motivo"),
      consulta: formData.get("consulta"),
    };

    //Validacion del lado del cliente
    const result = FormConsultaValidation.safeParse(newForm);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    //Validacion del lado del servidor
    const response = await InsertarConsulta(result.data);
    if (response?.error) {
      //Manejar el error
      toast.error(response.error);
    } else {
      redirect("/Contacto/Exitoso")
    }
  };
  return (
    <section className="bg-fondoSecundario p-12 lg:-mb-12">
      <form className="flex flex-col gap-4 max-w-72" action={clientAction}>
        <input
          type="email"
          placeholder="Correo electrónico"
          name="correoElectronico"
          className="border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          required
        />
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          className="border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          required
        />

        <select
          className="border-b border-colorBase h-14 bg-fondoTerciario text-xl text-[#f1be8f] pl-3"
          defaultValue="default"
          name="motivo"
          required
        >
          <option value="default" disabled>
            Asunto
          </option>
          <option value="Producto">Producto</option>
          <option value="Duda">Duda</option>
          <option value="Error">Error</option>
          <option value="Sugerencia">Sugerencia</option>
          <option value="Otro">Otro</option>
        </select>
        <textarea
          placeholder="Consulta"
          className="border-b border-colorBase h-24 bg-fondoTerciario text-xl text-white pl-3 pt-4"
          name="consulta"
          required
        ></textarea>
        <div className="text-white flex items-center gap-2">
        <input
          type="checkbox"
          name="terminos"
          required
          className="checkbox-input"
        />
        <Link href={"/AvisoLegal"} className="underline">
          Aceptar términos y condiciones
        </Link>
      </div>
        <button
          type="submit"
          className="bg-colorBase h-14 mt-5 lg:mt-10 -mr-12 w-3/4 self-end text-2xl flex justify-start items-center pl-3 hover:bg-colorBaseSecundario hover:text-black transition duration-300 ease-in-out"
        >
          Enviar
        </button>
      </form>
      <Toaster position="top-right" richColors />
      <style jsx>{`
        input::placeholder,
        select::placeholder,
        textarea::placeholder {
          color: #f1be8f;
        }
        option {
          color: #f1be8f;
        }
      `}</style>
    </section>
  );
}
