import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import HeaderScroll from "./components/layout/headerScroll";
import BotonesHeader from "./components/layout/botonesHeader";
import ContenidoFooter from "./components/footer/contenidoFooter";
import DivLogo from "./components/layout/divLogo";

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
          <DivLogo/>
          <BotonesHeader />
        </header>
        {/* Este header solo se muestra cuando la pagina esta scroleada */}
        <HeaderScroll />

        {children}
        <footer className="flex justify-center p-20 pb-0">
        <ContenidoFooter/>

        </footer>
      </body>
    </html>
  );
}
