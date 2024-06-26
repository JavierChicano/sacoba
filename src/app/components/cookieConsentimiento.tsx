"use client";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useState } from "react";

export default function CookieConsentimiento() {
  const [show, setShow] = useState(true);

  const handleAccept = () => {
    setCookie("consent-cookies", true, { maxAge: 60 * 60 * 24 * 365 }); // 1 año
    setShow(false);
  };

  if (!show) return null;
  return (
    <aside className="z-50 fixed bottom-0 w-full p-4 bg-colorBase flex justify-between gap-10">
      <div>
        <h1 className="text-2xl">Cookies</h1>
        <p>Esta página web usa cookies para mejorar su experiencia de uso.</p>
        <p>
          Al usar nuestra página web, usted acepta el uso de cookies de acuerdo
          con nuestra{" "}
          <Link href="/Legal/PoliticaCookies/" className="underline text-blue-600">
            Política de Privacidad.
          </Link>
          
        </p>
      </div>
      <button onClick={handleAccept} className="p-2 bg-black text-white h-12 self-center">
        Aceptar
      </button>
    </aside>
  );
}
