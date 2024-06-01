"use client";
import { cn } from "@nextui-org/react";
import ContenidoFooter from "./contenidoFooter";
import { usePathname } from "next/navigation";

const hiddenPaths = ['/Registro', '/Cuenta'];

export default function Footer() {
  const pathName = usePathname();
  const isHiddenPath = pathName.startsWith('/Login') || hiddenPaths.includes(pathName);

  return (
    <footer
      className={cn({
        "flex justify-center pt-10 p-0 lg:p-20 pb-0": !isHiddenPath,
        'hidden': isHiddenPath,
      })}
    >
      <ContenidoFooter />
    </footer>
  );
}
