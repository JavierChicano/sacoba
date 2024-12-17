import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import ClientComponent from "./components/layout/client";
import Header from "./components/layout/header";
import Footer from "./components/footer/footer";
import CookieConsentimiento from "./components/cookieConsentimiento";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muebles Sacoba",
  description: "Página web de venta al público de mesas, sillas y bancos de cocina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D7F98HXQYR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-D7F98HXQYR');
            `,
          }}
        />
      </head>
      <body className={cn("bg-fondo min-h-lvh w-full", inter.className)}>
        <ClientComponent>
          <Header />
          {children}
          <CookieConsentimiento />
          <Footer />
        </ClientComponent>
      </body>
    </html>
  );
}
