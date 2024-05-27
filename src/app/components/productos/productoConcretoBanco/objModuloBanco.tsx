import { IconMinus, IconPlus } from "@tabler/icons-react";
import { TipoBanco } from "../../../../../tipos/tipos";
import { useEffect, useState } from "react";
import { useBancoFinal } from "../../../../../states/statesProductoFinal";
import Euro from "../../euro";

export default function ObjModuloBanco({
  modulo,
  tapizado,
}: {
  modulo: TipoBanco;
  tapizado: string;
}) {
  //Estados globales
  const { banco, agregarModulo, eliminarModulo } = useBancoFinal();

  //Estados para guardar la seleccion del usuario
  const [cantidad, setCantidad] = useState(0);
  const [respaldoSeleccionado, setRespaldoSeleccionado] = useState(false);

  //Estados para coger las variables del modulo
  const [indexPrecio, setIndexPrecio] = useState(0);
  const [costeModulo, setCosteModulo] = useState(0);

  const dimensionesModulo = () => {
    const dimensiones = modulo.modulo + " cm x 45cm";
    return dimensiones;
  };
  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  const precioConRespaldo = () => {
    if (respaldoSeleccionado && modulo.precioRespaldo) {
      setCosteModulo(costeModulo + modulo.precioRespaldo);  
    } else if (modulo.precioRespaldo) {
      setCosteModulo(costeModulo - modulo.precioRespaldo)
    }
  };
  useEffect(() => {
    if (
      modulo.modulo === "45Rincon" ||
      modulo.modulo === "120" ||
      modulo.modulo === "150"
    ) {
      setCantidad(1);
    }
  }, []);
  useEffect(() => {
    const preciosModulo = modulo.precio.split(",");
    const costeModulo = parseFloat(preciosModulo[indexPrecio]);
    setCosteModulo(Math.round(costeModulo));
  }, [modulo, indexPrecio]);

  useEffect(() => {
    if (tapizado === "Tapizado normal") {
      setIndexPrecio(0);
    } else if (tapizado === "Tapizado premium") {
      setIndexPrecio(1);
    }
  }, [tapizado]);

  useEffect(() => {
    //Para modulos con respaldo y que lo haya seleccionado
    if(modulo.precioRespaldo && cantidad !== 0 && modulo.respaldo && respaldoSeleccionado){
      agregarModulo(dimensionesModulo(), respaldoSeleccionado, cantidad, costeModulo, modulo.precioRespaldo )

    // Para los modulos que tengan respaldo pero no se haya seleccionado
    }else if(cantidad !== 0 && modulo.respaldo){
      agregarModulo(dimensionesModulo(), modulo.respaldo, cantidad, costeModulo, 0 )
    
    //Para modulos que no cumplan las condiciones anteriores, pero haya seleccionado cantidad > 1
    }else if(cantidad !== 0){
      agregarModulo(dimensionesModulo(), respaldoSeleccionado, cantidad, costeModulo, 0 )

    //Para borrar el modulo que no se haya seleccionado cantidad = 0
    }else if(cantidad === 0){
        eliminarModulo(dimensionesModulo())
    }
  }, [cantidad, modulo.modulo, respaldoSeleccionado, costeModulo, modulo.precioRespaldo]);
  
  return (
    <aside className="bg-fondoTerciario p-4 flex flex-col gap-4 border border-colorBase m-1">
      <h1 className="text-xl">
        Tamaño: <span className="text-lg">{dimensionesModulo()}</span>
      </h1>
      {modulo.respaldo && (
        <section className="text-xl flex flex-col gap-4">
          <h2>
            {modulo.precioRespaldo === 0 ? (
              "Respaldo Integrado"
            ) : (
              <label className="flex items-center">
                Añadir respaldo: {modulo.precioRespaldo}€
                <input
                  type="checkbox"
                  checked={(respaldoSeleccionado)}
                  onChange={(e) => {
                    setRespaldoSeleccionado(e.target.checked);
                    precioConRespaldo();
                  }}
                  style={{ width: "20px", height: "20px", marginLeft: "5px" }}
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
        <h2 className="text-xl">Precio unidad: {costeModulo}<span className="text-xs align-super">€</span></h2>
      </aside>
    </aside>
  );
}
