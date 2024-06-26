import Link from "next/link";

export default function PoliticaCookies() {
  return (
    <main className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-2xl md:text-3xl my-2">Política de cookies</h1>
      <p>Esta página web usa cookies para mejorar su experiencia de usuario.</p>
      <aside className="max-w-7xl w-full flex flex-col gap-2">
        <h1 className="text-xl">¿Qué son las cookies?</h1>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su
          dispositivo cuando visita nuestro sitio web. Nos ayudan a recordar sus
          preferencias y a mejorar la funcionalidad del sitio.
        </p>
      </aside>
      <section className="max-w-7xl w-full flex flex-col gap-8">
        <p className="flex flex-col gap-2">
          <h2 className="text-xl">Tipos de cookies que utilizamos</h2>
          <h4>
            Cookies esenciales: Estas cookies son necesarias para el
            funcionamiento básico del sitio web.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Cómo gestionar las cookies</h2>
          <h4>
            Puede configurar su navegador para bloquear o eliminar cookies.
            Consulte la sección de ayuda de su navegador para obtener
            instrucciones específicas.
          </h4>
          <h4>
            Para obtener más detalles sobre nuestro uso de cookies y cómo puede
            gestionarlas, visite nuestra{" "}
            <a href="/Legal/PoliticaPrivacidad/" className="underline text-blue-600">Política de Privacidad</a>.
          </h4>
        </p>
      </section>
    </main>
  );
}
