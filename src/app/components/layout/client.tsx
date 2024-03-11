"use client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function ClientComponent({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
