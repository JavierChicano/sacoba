import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { usePrecioAcumulado } from "../../../../../states/states";

type ModuloEspecificoParams = {
  dimensiones: string;
  respaldo: boolean | null;
  precioRespaldo: number | null;
  precio: number;
};

export default function ModuloEspecifico({
  datos,
}: {
  datos: ModuloEspecificoParams;
}) {
  const [respaldoSeleccionado, setRespaldoSeleccionado] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(datos.precio);
  const { precioAcumulado, addPrecioAcumulado, subPrecioAcumulado } = usePrecioAcumulado();

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  useEffect(() => {
    // Actualizar precio total
    let nuevoPrecio = datos.precio;
    if (respaldoSeleccionado && datos.precioRespaldo !== null) {
      nuevoPrecio += datos.precioRespaldo;
    }
    setPrecioTotal(nuevoPrecio);
  }, [respaldoSeleccionado, datos.precioRespaldo, datos.precio]);

  return (
    <article className="bg-fondoTerciario p-4 flex flex-col gap-4 border border-colorBase m-1">
      <h1 className="text-xl">Dimensiones: {datos.dimensiones}x45</h1>
      {datos.respaldo && (
        <section className="text-xl flex flex-col gap-4">
          <h2>
            {datos.precioRespaldo === 0 ? (
              "Respaldo Integrado"
            ) : (
              <label className="flex items-center">
                Añadir respaldo: {datos.precioRespaldo}€
                <input
                  type="checkbox" 
                  checked={respaldoSeleccionado}
                  onChange={(e) => setRespaldoSeleccionado(e.target.checked)}
                  style={{ width: '20px', height: '20px', marginLeft: '5px' }}
                />
              </label>
            )}
          </h2>
        </section>
      )}
      <section className="flex items-center gap-4">
        <h2 className="text-xl">Cantidad: </h2>
        <div className="flex border-[1px] border-fondoSecundario justify-between">
          <div
            className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
            onClick={() => {
              disminuirCantidad();
            }}
          >
            <IconMinus stroke={2} />
          </div>
          <div className="bg-fondoSecundario w-10  p-2 flex justify-center ">
            {cantidad}
          </div>
          <div
            className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
            onClick={() => {
              aumentarCantidad();
            }}
          >
            <IconPlus stroke={2} />
          </div>
        </div>
      </section>
      <aside>
        <h2 className="text-xl">Precio unidad: {precioTotal}€</h2>
      </aside>
    </article>
  );
}
