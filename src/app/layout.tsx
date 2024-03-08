import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BotonTema from "./components/layout/botonCambioTema";
import BotonHeader from "./components/layout/botonesHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muebles sacoba",
  description: "Pagina web de venta al público de mesas, sillas y bancos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-fondo min-h-lvh w-full", inter.className)}>
        <header className="w-full flex justify-center">
          <BotonHeader/>
          {/* <ul className="flex justify-center text-2xl gap-12">
          <BotonHeader
              datos={{
                margin: 10,
                nombre: "Ejemplo",
              }}
            />
            <BotonHeader
              datos={{
                margin: 2,
                nombre: "Productos",
              }}
            />
            <li className="flex items-center -mx-2">
              <Image
                className="h-48 w-auto cursor-pointer mt-5"
                src="/logo.png"
                alt="Logo de la marca"
                width={256}
                height={256}
              />
            </li>
            <BotonHeader
              datos={{
                margin: 2,
                nombre: "Outlet",
              }}
            />
            <BotonHeader
              datos={{
                margin: 10,
                nombre: "Contacto",
              }}
            />
          <BotonTema/>

          </ul> */}
        </header>
        {children}
      </body>
    </html>
  );
}
