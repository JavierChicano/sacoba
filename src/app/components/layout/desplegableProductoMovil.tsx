import React, { useState } from "react";
import Link from "next/link";
import {
  IconArmchair,
  IconArrowBackUp,
  IconDesk,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function DesplegableProductoMovil({
  onClose,
  onBack,
}: {
  onClose: () => void;
  onBack: () => void;
}) {
  const pathName = usePathname();
  const { theme } = useTheme();

  return (
    <ul
      className={`flex lg:hidden fixed top-0 right-0 w-full h-screen z-50 flex-col items-center justify-center gap-10 text-4xl backdrop-blur-sm ${
        theme === "light" ? "bg-white/20" : "bg-black/20"
      }`}
    >
      <div className="w-4/5 flex justify-between">
        <IconArrowBackUp size={50} onClick={onBack} />
        <IconX size={50} onClick={onClose} />
      </div>
      <li className="w-full px-10">
        <Link
          href="/ProductoMesa/"
          className={`grid grid-cols-3 gap-2 px-4 py-2 ${
            pathName === "/ProductoMesa"
              ? "bg-colorBase text-black"
              : "hover:bg-fondoTerciario"
          }`}
          onClick={onClose}
        >
          <div className="w-full justify-end flex">
            <IconDesk
              stroke={1}
              size={40}
              color={
                theme === "light"
                  ? "black"
                  : pathName === "/ProductoMesa"
                  ? "black"
                  : "white"
              }
            />
          </div>

          <span className="col-span-2">Mesas</span>
        </Link>
      </li>
      <li className="w-full px-10">
        <Link
          href="/ProductoSilla/"
          className={`grid grid-cols-3 gap-2 items-center px-4 py-2 ${
            pathName === "/ProductoSilla"
              ? "bg-colorBase text-black"
              : "hover:bg-fondoTerciario"
          }`}
          onClick={onClose}
        >
          <div className="w-full justify-end flex">
            <IconArmchair
              stroke={1}
              size={40}
              color={
                theme === "light"
                  ? "black"
                  : pathName === "/ProductoSilla"
                  ? "black"
                  : "white"
              }
            />
          </div>
          <span className="col-span-2">Sillas</span>
        </Link>
      </li>
      <li className="w-full px-10">
        <Link
          href="/ProductoBanco/"
          className={`grid grid-cols-3 gap-2 items-center px-4 py-2 ${
            pathName === "/ProductoBanco"
              ? "bg-colorBase text-black"
              : "hover:bg-fondoTerciario"
          }`}
          onClick={onClose}
        >
          <div className="w-full justify-end flex">
            <Image
              className={
                theme === "light"
                  ? "w-auto"
                  : pathName === "/ProductoBanco"
                  ? "black w-auto "
                  : "w-auto  filter invert"
              }
              src="/iconos/banco.png"
              alt="Logo de la marca"
              width={40}
              height={40}
            />
          </div>
          <span className="col-span-2">Bancos</span>
        </Link>
      </li>
      <li className="w-full px-10">
        <Link
          href="/ProductoAMedida/"
          className={`grid grid-cols-3 gap-2 items-center px-4 py-2 ${
            pathName === "/ProductoAMedida"
              ? "bg-colorBase text-black"
              : "hover:bg-fondoTerciario"
          }`}
          onClick={onClose}

        >
          <div className="w-full justify-end flex">
            <Image
              className={
                theme === "light"
                  ? "w-auto"
                  : pathName === "/ProductoAMedida"
                  ? "black w-auto"
                  : "w-auto  filter invert"
              }
              src="/iconos/aMedida.png"
              alt="Logo de la marca"
              width={40}
              height={40}
            />
          </div>
          <span className="col-span-2">A medida</span>
        </Link>
      </li>
    </ul>
  );
}
