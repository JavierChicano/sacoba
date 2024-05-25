import React, { useState } from "react";
import Link from "next/link";
import { IconArmchair, IconDesk } from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function DesplegableProducto() {
  const [isHovered, setIsHovered] = useState(false);
  const pathName = usePathname();
  const { theme } = useTheme();

  //Verficia que estamos en la pagina producto...
  const contieneProducto = /Producto/i.test(pathName);

  return (
    <aside className="flex flex-col ">
      <li
        id="dropdownHoverButton"
        onMouseEnter={() => setIsHovered(true)}
        className={cn(contieneProducto ? "w-36 flex justify-center cursor-pointer font-bold text-colorBase z-20" : "w-36 flex justify-center cursor-pointer z-20")}
      >
        Productos
      </li>

      <div
        id="dropdownHover"
        className={`absolute pt-10 z-10 ${isHovered ? "block" : "hidden"} ${pathName === "/" && isHovered ? "backdrop-blur-xl" : ""} animate-fade-down animate-ease-out`}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ul className=" text-xl text-contraste bg-slate-500/70">
          <li>
            <Link
              href="/ProductoMesa/"
              className={`flex gap-4 items-center px-4 py-2 ${
                pathName === "/ProductoMesa" ? "bg-colorBase text-black" : "hover:bg-fondoTerciario"
              }`}
            >
              <IconDesk stroke={1} color={theme === "light" ? "black" : (pathName === "/ProductoMesa" ? "black" : "white")}/>
              Mesas
            </Link>
          </li>
          <li>
            <Link
              href="/ProductoSilla/"
              className={`flex gap-4 items-center px-4 py-2 ${
                pathName === "/ProductoSilla" ? "bg-colorBase text-black" : "hover:bg-fondoTerciario"
              }`}
            >
              <IconArmchair stroke={1} color={theme === "light" ? "black" : (pathName === "/ProductoSilla" ? "black" : "white")}/>
              Sillas
            </Link>
          </li>
          <li>
            <Link
              href="/ProductoBanco/"
              className={`flex gap-4 items-center px-4 py-2 ${
                pathName === "/ProductoBanco" ? "bg-colorBase text-black" : "hover:bg-fondoTerciario"
              }`}
            >
              <Image
              className={theme === "light" ? "w-auto h-6" : (pathName === "/ProductoBanco" ? "black w-auto h-6" : "w-auto h-6 filter invert")}
                src="/iconos/banco.png"
                alt="Logo de la marca"
                width={50}
                height={50}
              />
              Bancos
            </Link>
          </li>
          {/* <li>
            <Link
              href="/ProductoAMedida/"
              className={`flex gap-4 items-center px-4 py-2 ${
                pathName === "/ProductoAMedida" ? "bg-colorBase text-black" : "hover:bg-fondoTerciario"
              }`}
            >
              <Image
                className={`w-auto h-6  ${
                  pathName === "/ProductoAMedida" ? "filter none" : "filter invert"}`}
                src="/iconos/aMedida.png"
                alt="Logo de la marca"
                width={50}
                height={50}
              />
              A medida
            </Link>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}
