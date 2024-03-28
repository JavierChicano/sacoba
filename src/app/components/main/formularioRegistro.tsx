"use client";
import { IconEye, IconEyeOff, IconMail, IconUserScan } from "@tabler/icons-react";
import React, { useState } from "react";

export default function FormRegistro() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
  return (
    <form className="flex flex-col gap-4 max-w-lg mb:max-w-sm">
      <div className="flex gap-4 w-full relative">
        <div className="flex w-1/2 relative">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
          />
          <IconUserScan
            className="absolute right-5 self-center w-8"
            height={30}
          />
        </div>

        <input
          type="text"
          placeholder="Apellidos"
          className="w-1/2 border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
        />
        <IconUserScan
          className="absolute right-5 self-center w-8"
          height={30}
        />
      </div>
      <div className="flex relative">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
        />
        <IconMail className="absolute right-5 self-center w-8 z-15"
          height={30}/>
      </div>

      <div className="flex relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          className="w-full border-b border-colorBase h-14 bg-fondoTerciario text-xl text-white pl-3"
        />
        {showPassword ? (
          <IconEyeOff
            className="absolute right-5 self-center w-8 z-15 cursor-pointer"
            height={30}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <IconEye
            className="absolute right-5 self-center w-8 z-15 cursor-pointer"
            height={30}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>

      <button
        type="submit"
        className=" w-2/3 bg-colorBase h-14 self-center text-2xl hover:bg-colorBaseSecundario hover:text-black transition duration-300 ease-in-out"
      >
        Crear cuenta
      </button>
      <style jsx>{`
        input::placeholder {
          color: #f1be8f;
        }
        textarea::placeholder {
          color: #f1be8f;
          padding-top: -1px;
        }
      `}</style>
    </form>
  );
}
