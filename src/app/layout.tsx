import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import ClientComponent from "./components/layout/client";
import Header from "./components/layout/header";
import Footer from "./components/footer/footer";

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
          <Header />
          {children}
          <Footer />
        </ClientComponent>
      </body>
    </html>
  );
}
