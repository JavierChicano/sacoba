"use client"
import { PropsWithChildren } from "react";

export default function HoverBotonPerfil({ children }: PropsWithChildren) {
  return (
    <span className="w-fit relative cursor-pointer"> 
    {children}
    <style jsx>
      {`
      span::before {
        content: '';
        position: absolute;
        height: 3px;
        width: 0;
        transition: width 0.4s; /* Solo necesitas una declaración de transition */
        background: linear-gradient(to right, #ff8a00, #ff8a00);
        bottom: -4px;
        left: 0;
        right: 0;
      }
      span:hover::before {
        width: 100%;
      }
      `}
    </style>
  </span>
  );
}
