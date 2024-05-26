"use client";
import { cn } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function BotonTema() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center">
      <div className="toggle">
        <button
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          className={cn(
            "rounded-full flex items-center justify-center lg:w-10 lg:h-10 w-12 h-12",
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
