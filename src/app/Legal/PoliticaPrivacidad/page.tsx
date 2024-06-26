import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <main className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-2xl md:text-3xl my-2">Política de privacidad</h1>
      <aside className="max-w-7xl w-full flex flex-col gap-2">
        <h1 className="text-xl">Introducción</h1>
        <p>
          En Sacoba, nos comprometemos a proteger y respetar su privacidad. Esta
          Política de Privacidad describe cómo recopilamos, usamos y protegemos
          su información personal cuando visita nuestro sitio web y compra
          nuestros muebles de cocina. Al utilizar nuestro sitio web, usted
          acepta las prácticas descritas en esta política.
        </p>
      </aside>
      <section className="max-w-7xl w-full flex flex-col gap-8">
        <p className="flex flex-col gap-2">
          <h2 className="text-xl">Información que recopilamos</h2>
          <h4>
            Información personal; Nombre, dirección de correo electrónico,
            número de teléfono, dirección de envío y facturación, información de
            pago (tarjeta de crédito/débito u otros métodos de pago).
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Cómo usamos su información</h2>
          <h4>
            Para procesar pedidos: Utilizamos su información personal para
            procesar y entregar sus pedidos de muebles de cocina, y para
            gestionar los pagos
          </h4>
          <h4>
            Analizamos datos no personales para mejorar el diseño, funcionalidad
            y contenido de nuestro sitio web.
          </h4>
          <h4>
            Para comunicaciones: Podemos utilizar su información de contacto
            para enviarle actualizaciones sobre su pedido y responder a sus
            consultas
          </h4>
          <h4>
            Para cumplimiento legal: Podemos divulgar su información si es
            requerido por ley o en respuesta a una solicitud válida de las
            autoridades.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Cómo protegemos su información</h2>
          <h4>
            Utilizamos medidas de seguridad técnicas y organizativas para
            proteger su información personal contra el acceso no autorizado, la
            alteración, la divulgación o la destrucción. Los datos de pago están
            protegidos mediante cifrado durante la transmisión utilizando
            tecnologías SSL (Secure Socket Layer).
          </h4>
        </p>
        <p className="flex flex-col gap-2">
          <h2 className="text-xl">Compartición de información</h2>
          <h4>
            Proveedores de servicios: Compartimos su información con proveedores
            de servicios que nos ayudan con el procesamiento de pagos, el envío
            y la entrega de productos, y la administración del sitio web.
          </h4>
          <h4>
            Terceros autorizados: No vendemos ni alquilamos su información
            personal a terceros. Sin embargo, podemos compartir información con
            socios de negocio bajo acuerdos de confidencialidad estrictos.
          </h4>
        </p>
        <p className="flex flex-col gap-2">
          <h2 className="text-xl">Sus derechos</h2>
          <h4>
            Acceso y rectificación: Usted tiene derecho a acceder a su
            información personal y a solicitar la corrección de datos
            incorrectos o incompletos.
          </h4>
          <h4>
            Eliminación: Puede solicitar la eliminación de su información
            personal cuando ya no sea necesaria para los fines para los que fue
            recopilada.
          </h4>
          <h4>
            Oposición y restricción: Puede oponerse al procesamiento de su
            información personal o solicitar una restricción en el uso de sus
            datos bajo ciertas circunstancias.
          </h4>
          <h4>
            Portabilidad: Usted tiene derecho a recibir una copia de su
            información personal en un formato estructurado, de uso común y
            lectura mecánica, y a transmitir esos datos a otro controlador.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Cookies y tecnologías similares</h2>
          <h4>
            Utilizamos{" "}
            <Link href={"/Legal/PoliticaCookies/"} className="underline text-blue-600">
              cookies
            </Link>{" "}
            para mejorar su experiencia en nuestro sitio web.
          </h4>
          <h4>
            Puede configurar su navegador para rechazar cookies, pero esto puede
            afectar su capacidad de usar algunas partes de nuestro sitio web.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Cambios a esta política de privacidad</h2>
          <h4>
            Nos reservamos el derecho a actualizar esta{" "}
            <Link
              href={"/Legal/PoliticaPrivacidad/"}
              className="underline text-blue-600"
            >
              Política de Privacidad
            </Link>{" "}
            en cualquier momento. Cualquier cambio será publicado en esta
            página, y le notificaremos por correo electrónico o mediante un
            aviso en nuestro sitio web antes de que los cambios entren en vigor.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Contacto</h2>
          <h4>
            Si tiene preguntas o preocupaciones sobre esta Política de
            Privacidad o sobre el manejo de su información personal, puede
            contactarnos en:
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Política de Devoluciones y Reembolsos</h2>
          <h4>
            Consulta nuestras{" "}
            <Link
              href={"/Legal/CondicionesVenta/"}
              className="underline text-blue-600"
            >
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
            Para productos defectuosos o dañados, consulta nuestras{" "}
            <Link
              href={"/Legal/CondicionesVenta/"}
              className="underline text-blue-600"
            >
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
            compra en un plazo determinado, generalmente 5 días naturales, a
            partir de la recepción del producto.
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
            <Link
              href={"/Legal/AvisoLegal/"}
              className="underline text-blue-600"
            >
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
            <Link
              href={"/Legal/PoliticaCookies/"}
              className="underline text-blue-600"
            >
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
        <p>
          <h2 className="text-xl">Sacoba</h2>
          <h4>Correo electrónico: <Link
              href="mailto:sacoba@sacoba.es"
              className="text-colorBase"
            >
              sacoba@sacoba.es
            </Link></h4>
          <h4>Teléfono: 916 04 96 04</h4>
          <h4>Dirección: Av. de Fuenlabrada, 55, 28970 Humanes de Madrid, Madrid. España</h4>
        </p>
      </section>
    </main>
  );
}
