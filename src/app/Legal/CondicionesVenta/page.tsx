import Link from "next/link";

export default function CondicionesVenta() {
  return (
    <main className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-2xl md:text-3xl my-2">Condiciones de venta</h1>
      <aside className="w-full flex flex-col gap-2">
        <h1 className="text-xl">Introducción</h1>
        <p>
          Bienvenido a Sacoba. Estas Condiciones de Venta describen los términos
          y condiciones aplicables a la compra de muebles de cocina a través de
          nuestro sitio web. Al realizar un pedido en nuestro sitio web, usted
          acepta estar sujeto a estos términos y condiciones.
        </p>
      </aside>
      <section className="max-w-7xl w-full flex flex-col gap-8">
        <p className="flex flex-col gap-2">
          <h2 className="text-xl">Información del producto</h2>
          <h4>
            Descripción del producto: Nos esforzamos por proporcionar
            descripciones precisas y actualizadas de nuestros muebles de cocina.
            Sin embargo, no garantizamos que las descripciones sean completas,
            precisas o libres de errores. Las imágenes de los productos son solo
            de referencia y pueden no representar exactamente el producto
            recibido.
          </h4>
          <h4>
            Disponibilidad del producto: Todos los productos están sujetos a
            disponibilidad. Nos reservamos el derecho de limitar la cantidad de
            productos que ofrecemos y de descontinuar cualquier producto en
            cualquier momento sin previo aviso.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Precios y pagos</h2>
          <h4>
            Precios: Los precios de los productos están indicados en nuestro
            sitio web y son sujetos a cambio sin previo aviso. Los precios
            incluyen impuestos aplicables, pero no incluyen gastos de envío y
            manejo, que se calcularán y agregarán al total del pedido antes de
            finalizar la compra.
          </h4>
          <h4>
            Métodos de Pago: Aceptamos los siguientes métodos de pago: tarjeta
            de crédito/débito u otros métodos de pago. El pago completo debe
            realizarse en el momento de la compra. Nos reservamos el derecho de
            verificar la información de pago antes de procesar el pedido.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Envío y entrega</h2>
          <h4>
            Proceso de envío: Los pedidos serán procesados y enviados lo más
            rápido posible. El tiempo de entrega puede variar según la ubicación
            del cliente y la disponibilidad del producto.
          </h4>
          <h4>
            Gastos de envío: Los gastos de envío se calcularán y mostrarán
            durante el proceso de pago. Ofrecemos diferentes opciones para
            recibir el producto.
          </h4>
        </p>
        <p className="flex flex-col gap-2">
          <h2 className="text-xl">Devoluciones y reembolsos</h2>
          <h4>
            Si no está completamente satisfecho con su compra, puede devolver
            los productos en un plazo de 14 días a partir de la fecha de
            entrega. Los productos deben estar en su estado original, sin usar y
            en su embalaje original. Cualquier daño aparente en el embalaje
            deberá hacerse constar junto la firma del conforme. No podremos
            hacernos cargo de reclamaciones posteriores. No serán admitidas
            devoluciones no autorizadas previamente y que no estén en plazo o
            con su embalaje original. Las devoluciones ajenas a defectos de
            fabricación que sean autorizadas serán abonadas por un 30% menos del
            valor facturado como concepto de gastos de transporte y
            depreciación.
          </h4>
          <h4>
            Proceso de devolución: Para iniciar una devolución, contáctenos en{" "}
            <Link
              href="mailto:atencionCliente@sacoba.es"
              className="text-colorBase"
            >
              atencionCliente@sacoba.es
            </Link>{" "}
            o 916 04 96 04 con su número de pedido y motivo de la devolución. Le
            proporcionaremos instrucciones detalladas sobre cómo devolver los
            productos.
          </h4>
          <h4>
            Reembolsos: Una vez que recibamos y verifiquemos los productos
            devueltos, procesaremos su reembolso dentro de 15 días hábiles. Los
            reembolsos se emitirán utilizando el mismo método de pago utilizado
            para la compra original.
          </h4>
          <h4>
            Gastos de devolución: Los gastos de envío de la devolución correrán
            por cuenta del cliente, a menos que la devolución sea el resultado
            de un error nuestro (producto defectuoso o incorrecto).
          </h4>
        </p>
        <p className="flex flex-col gap-2">
          <h2 className="text-xl">Garantía y responsabilidad</h2>
          <h4>HAY Q HACERLO</h4>
        </p>
        <p>
          <h2 className="text-xl">Ley Aplicable y Jurisdicción</h2>
          <h4>
            Ley Aplicable: Estas Condiciones de Venta se regirán e interpretarán
            de acuerdo con las leyes de España.
          </h4>
          <h4>
            Jurisdicción: Cualquier disputa que surja de o en relación con estas
            Condiciones de Venta estará sujeta a la jurisdicción exclusiva de
            los tribunales de Madrid, España.
          </h4>
        </p>
        <p>
          <h2 className="text-xl">Sacoba</h2>
          <h4>
            Correo electrónico:{" "}
            <Link href="mailto:sacoba@sacoba.es" className="text-colorBase">
              sacoba@sacoba.es
            </Link>
          </h4>
          <h4>Teléfono: 916 04 96 04</h4>
          <h4>
            Dirección: Av. de Fuenlabrada, 55, 28970 Humanes de Madrid, Madrid.
            España
          </h4>
        </p>
      </section>
    </main>
  );
}
