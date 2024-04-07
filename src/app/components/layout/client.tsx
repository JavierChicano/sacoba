"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider, useTheme } from "next-themes";
import { PropsWithChildren } from "react";

export default function ClientComponent({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
