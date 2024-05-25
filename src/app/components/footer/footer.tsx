"use client";
import { cn } from "@nextui-org/react";
import ContenidoFooter from "./contenidoFooter";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();

  return (
    <footer
      className={cn({
        "flex justify-center pt-10 p-0 lg:p-20 pb-0": ![
          "/Login",
          "/Registro",
          "/Cuenta",
        ].includes(pathName),
        hidden: ["/Login", "/Registro", "/Cuenta"].includes(pathName),
      })}
    >
      <ContenidoFooter />
    </footer>
  );
}
