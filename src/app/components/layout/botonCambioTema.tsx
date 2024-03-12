"use client";
import { cn } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function BotonTema() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-auto h-12 flex items-center">
      <div className="toggle">
        <button
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          className={cn(
            "rounded-full flex items-center justify-center w-10 h-10",
            theme === "dark" ? "bg-white" : "bg-black"
          )}
        >
          {theme === "dark" ? (
            <span className="label2">
              <IconSun stroke={2} color={"black"} />
            </span>
          ) : (
            <span className="label">
              <IconMoon stroke={2} color={"white"} />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
