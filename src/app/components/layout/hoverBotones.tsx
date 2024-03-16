"use client"
import { PropsWithChildren } from "react";

export default function HoverBoton({ children }: PropsWithChildren) {
  return (
    <span className="w-36 relative"> 
    {children}
    <style jsx>
      {`
      span::before {
        content: '';
        position: absolute;
        height: 3px;
        width: 0;
        transition: width 0.4s; /* Solo necesitas una declaración de transition */
        background: linear-gradient(to right, #ff8a00, #e52e71);
        bottom: -10px;
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
