import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import HeaderScroll from "./components/layout/headerScroll";
import Image from "next/image";
import BotonesHeader from "./components/layout/botonesHeader";

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
        <header className="w-full flex flex-col items-center">
            <div className="h-32 w-32 cursor-pointer bg-white rounded-3xl flex align-middle p-5 mt-5">
              <Image className="w-auto h-auto"
                src="/logo.png"
                alt="Logo de la marca"
                width={256}
                height={256}
              />
            </div>
            <BotonesHeader/>
        </header>
          {/* Este header solo se muestra cuando la pagina esta scroleada */}
        <HeaderScroll />

        {children}
      </body>
    </html>
  );
}
