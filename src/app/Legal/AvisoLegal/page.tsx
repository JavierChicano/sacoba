import Link from "next/link";

export default function AvisoLegal() {
  return (
    <main className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-2xl md:text-3xl my-2">
        Términos y Condiciones de Uso
      </h1>
      <aside className="w-full flex flex-col gap-2">
        <h1 className="text-xl">Definiciones</h1>
        <p>Usuario: Persona que accede y utiliza el sitio web de Sacoba.</p>
        <p>
          Contenido: Todos los textos, gráficos, logotipos, imágenes, y software
          presentes en el sitio web.
        </p>
        <p>
          Servicios: Compras y cualquier otra actividad ofrecida a través del
          sitio web.
        </p>
      </aside>
      <section className="max-w-7xl w-full flex flex-col gap-8">
        <p className="flex flex-col gap-2">
          <h2 className="text-xl">Aceptación de los Términos</h2>
          <h4>
            Al acceder y utilizar el sitio web de Sacoba, aceptas cumplir con
            estos{" "}
            <Link href={"/Legal/AvisoLegal"} className="underline text-blue-600">
              Términos y Condiciones de Uso
            </Link>
            , todas las leyes y regulaciones aplicables, y aceptas que eres
            responsable de cumplir con cualquier ley local aplicable. Si no
            estás de acuerdo con alguno de estos términos, tienes prohibido usar
            o acceder a este sitio.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Modificación de los Términos</h2>
          <h4>
            Sacoba se reserva el derecho de revisar y modificar estos Términos y
            Condiciones de Uso en cualquier momento sin previo aviso. Los
            cambios se publicarán en esta página y entrarán en vigor
            inmediatamente. Es tu responsabilidad revisar periódicamente estos
            términos para estar al tanto de las actualizaciones.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Registro de Usuario</h2>
          <h4>
            Para realizar una compra en el sitio web de Sacoba, es recomendable
            registrarse. Al registrarte, proporcionas tu consentimiento para que
            tus datos sean almacenados en nuestra base de datos. Es tu
            responsabilidad proporcionar información veraz y actualizada durante
            el proceso de registro.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Privacidad</h2>
          <h4>
            Sacoba se compromete a proteger tu privacidad. Todos los datos
            personales proporcionados durante el registro serán almacenados y
            utilizados de acuerdo con nuestra{" "}
            <Link href={"/Legal/PoliticaPrivacidad"} className="underline text-blue-600">
              Política de Privacidad
            </Link>
            . No compartiremos tu información personal con terceros sin tu
            consentimiento, excepto cuando sea requerido por la ley.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Uso Aceptable</h2>
          <h4>
            Al utilizar nuestro sitio web, aceptas no usarlo de manera que pueda
            causar daños, interrupciones o mal funcionamiento, ni para
            actividades ilegales o fraudulentas. No debes intentar obtener
            acceso no autorizado a nuestra red o sistemas.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Contenido del Usuario</h2>
          <h4>
            Cualquier contenido que subas o publiques en nuestro sitio web debe
            ser tuyo y no debe infringir los derechos de terceros. Sacoba se
            reserva el derecho de eliminar cualquier contenido que considere
            inapropiado, ofensivo o que viole estos términos.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Propiedad Intelectual</h2>
          <h4>
            Todos los contenidos del sitio web de Sacoba, incluyendo pero no
            limitándose a textos, gráficos, logotipos, imágenes, y software, son
            propiedad de Sacoba o de sus proveedores de contenido y están
            protegidos por las leyes de propiedad intelectual. No puedes
            reproducir, distribuir ni crear obras derivadas de este contenido
            sin el consentimiento previo por escrito de Sacoba.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Limitación de Responsabilidad</h2>
          <h4>
            Sacoba no será responsable de ningún daño directo, indirecto,
            incidental, especial o consecuente que resulte del uso o la
            incapacidad de uso de nuestro sitio web. Esto incluye, pero no se
            limita a, daños por pérdida de beneficios, interrupción de negocios,
            pérdida de datos u otra pérdida intangible.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Política de Devoluciones y Reembolsos</h2>
          <h4>
            Consulta nuestras{" "}
            <Link href={"/"} className="underline text-blue-600">
              Condiciones de venta
            </Link>{" "}
            para obtener información sobre cómo devolver productos y obtener
            reembolsos.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">
            Garantías y Responsabilidades del Producto
          </h2>
          <h4>
            Para productos defectuosos o dañados,
            consulta nuestras{" "}
            <Link href={"/"} className="underline text-blue-600">
              Condiciones de venta
            </Link>
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Métodos de Pago y Seguridad</h2>
          <h4>
            Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y
            débito. Utilizamos medidas de seguridad estándar para proteger tus
            transacciones.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Derechos de los Consumidores</h2>
          <h4>
            De acuerdo con las leyes aplicables, tienes derecho a desistir de tu
            compra en un plazo determinado, generalmente 14 días, a partir de la
            recepción del producto.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Enlaces a Sitios de Terceros</h2>
          <h4>
            El sitio web de Sacoba no contiene enlaces a sitios web de terceros.
            Sacoba no se responsabiliza de los contenidos ni de las prácticas de
            privacidad de sitios web externos.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Terminación del Acceso</h2>
          <h4>
            Sacoba se reserva el derecho de terminar tu acceso a nuestro sitio
            web en cualquier momento, sin previo aviso, por cualquier motivo,
            incluyendo, pero no limitado a, el incumplimiento de estos{" "}
            <Link href={"/Legal/AvisoLegal"} className="underline text-blue-600">
              Términos y Condiciones de Uso
            </Link>
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Legislación Aplicable</h2>
          <h4>
            Estos Términos y Condiciones de Uso se regirán e interpretarán de
            acuerdo con las leyes de España. Cualquier disputa que surja en
            relación con estos términos será sometida a la jurisdicción
            exclusiva de los tribunales de Madrid, España.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">
            Atención al Cliente y Resolución de Conflictos
          </h2>
          <h4>
            Para consultas, quejas o reclamaciones, contactar a nuestro servicio
            de atención al cliente a través de{" "}
            <Link
              href="mailto:atencionCliente@sacoba.es"
              className="text-colorBase"
            >
              atencionCliente@sacoba.es
            </Link>
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Uso de Cookies</h2>
          <h4>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
            Consulta nuestra{" "}
            <Link href={"/AvisoLegal"} className="underline text-blue-600">
              Política de Cookies
            </Link>{" "}
            para más detalles sobre su uso y cómo gestionarlas.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Accesibilidad del Sitio</h2>
          <h4>
            Nos comprometemos a garantizar que nuestro sitio web sea accesible
            para todas las personas, incluidas aquellas con discapacidades.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Actualización de Información</h2>
          <h4>
            Es tu responsabilidad mantener la información de tu cuenta
            actualizada. Sacoba no se responsabiliza por problemas derivados de
            información desactualizada.
          </h4>
        </p>
      </section>
    </main>
  );
}
