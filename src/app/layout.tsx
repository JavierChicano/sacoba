import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import HeaderScroll from "./components/layout/headerScroll";
import ContenidoFooter from "./components/footer/contenidoFooter";
import React from "react";
import ClientComponent from "./components/layout/client";
import Header from "./components/layout/header";

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
        <ClientComponent>
          <Header/>
          {/* Hay que poner este header y esconder el otro cuando se hace scroll */}
          <HeaderScroll />
          {children}
          <footer className="flex justify-center p-20 pb-0">
            <ContenidoFooter />
          </footer>
        </ClientComponent>
      </body>
    </html>
  );
}
